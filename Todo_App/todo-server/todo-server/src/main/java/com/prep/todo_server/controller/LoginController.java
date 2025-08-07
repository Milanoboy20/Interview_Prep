package com.prep.todo_server.controller;


import com.prep.todo_server.models.LoginRequest;
import com.prep.todo_server.models.LoginResponse;
import com.prep.todo_server.models.User;
import com.prep.todo_server.services.Result;
import com.prep.todo_server.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/login")
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping()
    public ResponseEntity<?> doLogin(@RequestBody LoginRequest request) {
        LoginResponse response = new LoginResponse();
        response.setToken("Session Token!");

        Result<User> user = userService.doLogin(request);
        if (!user.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        response.setUser(user.getPayload());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
