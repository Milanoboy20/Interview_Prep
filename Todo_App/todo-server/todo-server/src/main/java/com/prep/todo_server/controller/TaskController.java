package com.prep.todo_server.controller;


import com.prep.todo_server.models.Task;
import com.prep.todo_server.repository.TaskRepository;
import com.prep.todo_server.repository.UserRepository;
import com.prep.todo_server.services.Result;
import com.prep.todo_server.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) { this.taskService = taskService; }

    @GetMapping()
    public List<Task> getAllTasks() {
        return taskService.findAllTasks();
    }

    @GetMapping("/{taskId}")
    public ResponseEntity<?> findById(@PathVariable int taskId) {
        Task task = taskService.findById(taskId);

        if (task == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(task, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> createTask(@RequestBody Task task) {
        Result<Task> result = taskService.createTask(task);
        return result.isSuccess() ? new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED) : ErrorResponse.build(result);
    }

    @PutMapping("/{taskId}")
    public ResponseEntity<?> update(@RequestBody Task task, @PathVariable int taskId) {
        if (task.getTaskId() != taskId){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Result<Task> result = taskService.updateTask(task);
        return result.isSuccess() ? new ResponseEntity<>(HttpStatus.NO_CONTENT) : ErrorResponse.build(result);
    }


    @DeleteMapping("/{taskId}")
    public ResponseEntity<?> delete(@PathVariable int taskId) {
        if (!taskService.deleteById(taskId)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
