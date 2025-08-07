package com.prep.todo_server.services;


import com.prep.todo_server.models.LoginRequest;
import com.prep.todo_server.models.User;
import com.prep.todo_server.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public User findById(int userId) {
        return  userRepository.findById(userId).orElse(null);
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public Result<User> doLogin(LoginRequest request) {
        Result<User> result = new Result<>();

        User user = userRepository.findAll().stream().filter(u -> u.getUsername().equals(request.getUsername()) && u.getPassword().equals(request.getPassword()))
                .findFirst().orElse(null);

        if (user == null) {
            result.addMessage("User details not found");
            return result;
        }

        result.setPayload(user);
        return result;
    }

    @Transactional
    public Result<User> createUser(User user) {
        Result<User> result = new Result<>();
        validateUser(user, result, "add");

        if (!result.isSuccess()){
            return result;
        }

        user = userRepository.save(user);
        result.setPayload(user);
        return result;
    }

    @Transactional
    public Result<User> updateUser(User user) {
        Result<User> result = new Result<>();
        validateUser(user, result, "update");

        if (!result.isSuccess()) {
            return result;
        }

        User userExists = userRepository.findById(user.getUser_id()).orElse(null);
        if (userExists == null) {
            result.addMessage(String.format("userId: %d does not exist!", user.getUser_id()), ResultType.INVALID);
            return result;
        }

        userRepository.save(user);
        result.setPayload(user);
        return result;
    }

    @Transactional
    public boolean deleteById(int userId) {
        User userExists = userRepository.findById(userId).orElse(null);
        if (userExists == null) return false;

        userRepository.deleteById(userId);
        return true;
    }



    private void validateUser(User user, Result<User> result, String type) {
        if (type.equals("add")) {
            if (user.getUser_id() > 0){
                result.addMessage("userId cannot be set for add operation", ResultType.INVALID);
            }

            //duplication check
            //username
            List<User> users = (List<User>) userRepository.findAll();
            boolean duplicateUsername = users.stream().anyMatch(u -> u.getUsername().equals(user.getUsername()));
            if (duplicateUsername) {
                result.addMessage("Username already taken! Please enter a unique username.", ResultType.INVALID);
            }

            //user
            boolean duplicateUser = users.stream().anyMatch(u -> u.getEmail().equals(user.getEmail()));
            if (duplicateUser) {
                result.addMessage("User account with email: " + user.getEmail() + " already exists!", ResultType.INVALID);
            }

        }
        else {
            if (user.getUser_id() <= 0){
                result.addMessage("userId must be set for update operation", ResultType.INVALID);
            }

            //duplication check
            //username
            List<User> users = (List<User>) userRepository.findAll();
            boolean duplicateUsername = users.stream().filter(u -> u.getUser_id() != user.getUser_id())
                    .anyMatch(u -> u.getUsername().equals(user.getUsername()));
            if (duplicateUsername) {
                result.addMessage("Username already taken! Please enter a unique username.", ResultType.INVALID);
            }

            //user
            boolean duplicateUser = users.stream().filter(u -> u.getUser_id() != user.getUser_id())
                    .anyMatch(u -> u.getEmail().equals(user.getEmail()));
            if (duplicateUser) {
                result.addMessage("User account with email: " + user.getEmail() + " already exists!", ResultType.INVALID);
            }
        }

    }
}
