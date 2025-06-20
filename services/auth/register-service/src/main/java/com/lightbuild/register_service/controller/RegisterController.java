package com.lightbuild.register_service.controller;

import com.lightbuild.register_service.dto.RegisterRequest;
import com.lightbuild.register_service.service.RegisterService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class RegisterController {

    private final RegisterService registerService;

    public RegisterController(RegisterService registerService) {
        this.registerService = registerService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @RequestBody RegisterRequest request) {
        String response = registerService.register(request);
        if (response.equals("Email ya registrado") || response.startsWith("Error")) {
            return ResponseEntity.badRequest().body(response);
        } else {
            return ResponseEntity.ok(response); // Retorna el token directamente
        }
    }
}
