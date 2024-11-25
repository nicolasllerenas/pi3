package com.utec.tutoringapp.auth.domain;

import org.springframework.stereotype.Service;
import com.utec.tutoringapp.auth.dto.RegisterRequest;
import com.utec.tutoringapp.auth.dto.LoginRequest;
import com.utec.tutoringapp.user.infrastructure.UserRepository;
import com.utec.tutoringapp.user.domain.User;

@Service
public class AuthService {

    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void register(RegisterRequest request) {
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword()); // Add password hashing in production
        user.setRole(request.getRole());
        userRepository.save(user);
    }

    public String login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail());
        if (user != null && user.getPassword().equals(request.getPassword())) {
            return "dummy-jwt-token"; // Replace with actual JWT generation
        }
        throw new RuntimeException("Invalid credentials");
    }
}
