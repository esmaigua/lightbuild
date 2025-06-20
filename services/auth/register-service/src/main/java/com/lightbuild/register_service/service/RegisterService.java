package com.lightbuild.register_service.service;

import com.lightbuild.register_service.dto.RegisterRequest;
import com.lightbuild.register_service.dto.TokenResponse;
import com.lightbuild.register_service.model.User;
import com.lightbuild.register_service.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class RegisterService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RestTemplate restTemplate;


    public RegisterService(UserRepository userRepository, PasswordEncoder passwordEncoder, RestTemplate restTemplate) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.restTemplate = restTemplate;
    }

    public String register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            return "Email ya registrado";
        }

        // 1. Guardar usuario localmente
        User user = new User();
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        userRepository.save(user);

        // 2. Generar token desde tokens-service
        TokenResponse tokenResponse = restTemplate.postForObject(
                "http://tokens-service:8084/auth/token/generate",
                Map.of("email", request.getEmail()),
                TokenResponse.class
        );

        if (tokenResponse == null || tokenResponse.getToken() == null) {
            return "Error generando token";
        }

        // 3. Crear sesión en session-service
        Map<String, String> sessionData = new HashMap<>();
        sessionData.put("email", request.getEmail());
        sessionData.put("token", tokenResponse.getToken());

        restTemplate.postForObject(
            "http://session-service:8083/auth/session/create",
            sessionData,
            String.class // o Object.class si no necesitas leer el contenido
        );


        // 4. Retornar token como confirmación
        return tokenResponse.getToken();
    }
}
