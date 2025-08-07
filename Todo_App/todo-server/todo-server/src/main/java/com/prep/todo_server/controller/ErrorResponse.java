package com.prep.todo_server.controller;

import com.prep.todo_server.services.Result;
import com.prep.todo_server.services.ResultType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;

public class ErrorResponse {

    private final LocalDateTime timeStamp = LocalDateTime.now();
    private final String message;

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public String getMessage() {
        return message;
    }

    public ErrorResponse(String message) {this.message = message;}

    public ResponseEntity<Object> build(String message) {
        return new ResponseEntity<>(
                new ErrorResponse(message),
                HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    public static <T> ResponseEntity<Object> build(Result<T> result) {
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
        if (result.getResultType() == null || result.getResultType() == ResultType.INVALID) {
            status = HttpStatus.BAD_REQUEST;
        } else if (result.getResultType() == ResultType.NOT_FOUND) {
            status = HttpStatus.NOT_FOUND;
        }
        return new ResponseEntity<>(result.getErrorMessages(), status);
    }
}
