package com.prep.todo_server.services;

import java.util.ArrayList;
import java.util.List;

public class Result<T> {
    private T payload;
    private final List<String> errorMessages = new ArrayList<>();
    private ResultType resultType = ResultType.SUCCESS;

    public Result() {}
    public Result(ResultType resultType) {
        this.resultType = resultType;
    }


    public T getPayload() {
        return payload;
    }

    public void setPayload(T payload) {
        this.payload = payload;
    }

    public List<String> getErrorMessages() {
        return errorMessages;
    }

    public void addMessage(String message, ResultType type) {
        this.errorMessages.add(message);
        this.resultType = type;
    }

    public void addMessage(String message) {
        this.errorMessages.add(message);
    }


    public ResultType getResultType() {return this.resultType;}

    public boolean isSuccess(){
        return resultType == ResultType.SUCCESS;
    }
}
