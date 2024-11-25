package com.utec.tutoringapp.auth.application;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.utec.tutoringapp.auth.domain.AuthService;
import com.utec.tutoringapp.auth.dto.RegisterRequest;
import com.utec.tutoringapp.auth.dto.LoginRequest;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody RegisterRequest request) {
        authService.register(request);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest request) {
        String token = authService.login(request);
        return ResponseEntity.ok(token);
    }
}
