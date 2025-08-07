package com.prep.todo_server.controller;

import com.prep.todo_server.models.User;
import com.prep.todo_server.services.Result;
import com.prep.todo_server.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {this.userService = userService;}

    @GetMapping()
    public List<User> getAllUsers() {
        return userService.findAllUsers();
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> findById(@PathVariable int userId) {
        User user = userService.findById(userId);

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody User user) {
        Result<User> result = userService.createUser(user);
        return result.isSuccess() ? new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED) : ErrorResponse.build(result);
    }


    @PutMapping("/{userId}")
    public ResponseEntity<?> update(@RequestBody User user, @PathVariable int userId) {
        if (user.getUser_id() != userId) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Result<User> result = userService.updateUser(user);
        return result.isSuccess() ? new ResponseEntity<>(HttpStatus.NO_CONTENT) : ErrorResponse.build(result);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<?> delete(@PathVariable int userId) {
        if (!userService.deleteById(userId)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
