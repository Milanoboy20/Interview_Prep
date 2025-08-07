package com.prep.todo_server.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import org.hibernate.annotations.Cascade;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int taskId;

    @ManyToOne()
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference
    private User user;

    @Column(name = "taskType")
    private String taskType;

    @Column(name = "description")
    private String description;

    @Column(name = "is_complete")
    private boolean isComplete;


    public Task(){}

    public Task(int taskId, User user, String taskType, String description, boolean isComplete) {
        this.taskId = taskId;
        this.user = user;
        this.taskType = taskType;
        this.description = description;
        this.isComplete = isComplete;
    }

    public Task(User user, String taskType, String description, boolean isComplete) {
        this.user = user;
        this.taskType = taskType;
        this.description = description;
        this.isComplete = isComplete;
    }

    public int getTaskId() {
        return taskId;
    }

    public void setTaskId(int taskId) {
        this.taskId = taskId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTaskType() {
        return taskType;
    }

    public void setTaskType(String taskType) {
        this.taskType = taskType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isComplete() {
        return isComplete;
    }

    public void setComplete(boolean complete) {
        isComplete = complete;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Task task)) return false;

        if (getTaskId() != task.getTaskId()) return false;
        if (isComplete() != task.isComplete()) return false;
        if (getUser() != null ? !getUser().equals(task.getUser()) : task.getUser() != null) return false;
        if (getTaskType() != null ? !getTaskType().equals(task.getTaskType()) : task.getTaskType() != null)
            return false;
        return getDescription() != null ? getDescription().equals(task.getDescription()) : task.getDescription() == null;
    }

    @Override
    public int hashCode() {
        int result = getTaskId();
        result = 31 * result + (getUser() != null ? getUser().hashCode() : 0);
        result = 31 * result + (getTaskType() != null ? getTaskType().hashCode() : 0);
        result = 31 * result + (getDescription() != null ? getDescription().hashCode() : 0);
        result = 31 * result + (isComplete() ? 1 : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Task{" +
                "taskId=" + taskId +
                ", user=" + user +
                ", taskType='" + taskType + '\'' +
                ", description='" + description + '\'' +
                ", isComplete=" + isComplete +
                '}';
    }
}
