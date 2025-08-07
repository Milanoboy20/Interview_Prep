package com.prep.todo_server.services;

import com.prep.todo_server.models.Task;
import com.prep.todo_server.models.User;
import com.prep.todo_server.repository.TaskRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TaskService {

    @Autowired
    private final TaskRepository taskRepository;

    @Autowired
    private UserService userService;


    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }


    public List<Task> findAllTasks() {
        return  taskRepository.findAll();
    }

    public Task findById(int taskId) {
        return taskRepository.findById(taskId).orElse(null);
    }

    @Transactional
    public Result<Task> createTask(Task task) {
        Result<Task> result = new Result<>();
        validateTask(task, result, "add");

        if (!result.isSuccess()) return  result;

        task = taskRepository.save(task);
        result.setPayload(task);
        return result;
    }


    @Transactional
    public Result<Task> updateTask(Task task) {
        Result<Task> result = new Result<>();
        validateTask(task, result, "update");

        if (!result.isSuccess()) return result;

        Task taskExists = taskRepository.findById(task.getTaskId()).orElse(null);
        if (taskExists == null) {
            result.addMessage(String.format("taskId: %d does not exist!", task.getTaskId()), ResultType.INVALID);
            return result;
        }

        taskExists.setTaskType(task.getTaskType());
        taskExists.setComplete(task.isComplete());
        taskExists.setDescription(task.getDescription());
        taskRepository.save(taskExists);
        result.setPayload(taskExists);
        return result;
    }


    @Transactional
    public boolean deleteById(int taskId) {
        Task taskExists = taskRepository.findById(taskId).orElse(null);
        if (taskExists == null) return false;

        taskRepository.deleteById(taskId);
        return true;
    }


    private void validateTask(Task task, Result<Task> result, String type) {
        if (type.equals("add")) {
            if (task.getTaskId() > 0) {
                result.addMessage("taskId cannot be set for add operation", ResultType.INVALID);
            }

            //check user exists
            User userExists = userService.findById(task.getUser().getUser_id());
            if (userExists == null) {
                result.addMessage("cannot add task! user does not exist.", ResultType.INVALID);
            }
        }
        else {
            if (task.getTaskId() <= 0) {
                result.addMessage("taskId must be set for update operation", ResultType.INVALID);
            }
        }

    }
}
