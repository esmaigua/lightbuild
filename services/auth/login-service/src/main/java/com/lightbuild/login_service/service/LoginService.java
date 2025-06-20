package com.lightbuild.login_service.service;

import com.lightbuild.login_service.dto.LoginRequest;
import com.lightbuild.login_service.dto.TokenResponse;
import com.lightbuild.login_service.model.User;
import com.lightbuild.login_service.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class LoginService {

    private final UserRepository userRepository;
    private final RestTemplate restTemplate;
    private final PasswordEncoder passwordEncoder;

    public LoginService(UserRepository userRepository, RestTemplate restTemplate, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.restTemplate = restTemplate;
        this.passwordEncoder = passwordEncoder;
    }

    public String login(LoginRequest request) {
        Optional<User> optionalUser = userRepository.findByEmail(request.getEmail());

        if (optionalUser.isPresent() && passwordEncoder.matches(request.getPassword(), optionalUser.get().getPassword())) {
            String email = request.getEmail();

            // 1. Solicita token al tokens-service
            TokenResponse tokenResponse = restTemplate.postForObject(
                    "http://tokens-service:8084/auth/token/generate",
                    Map.of("email", email),
                    TokenResponse.class
            );

            if (tokenResponse == null || tokenResponse.getToken() == null) {
                throw new RuntimeException("No se pudo generar el token");
            }

            // 2. Envía sesión a session-service
            Map<String, String> sessionRequest = new HashMap<>();
            sessionRequest.put("email", email);
            sessionRequest.put("token", tokenResponse.getToken());

            restTemplate.postForObject(
                    "http://session-service:8083/auth/session/create",
                    sessionRequest,
                    Void.class
            );

            // 3. Retorna token
            return tokenResponse.getToken();
        }

        return null;
    }
}
