package com.lightbuild.session_service.controller;

import com.lightbuild.session_service.service.SessionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth/session")
public class SessionController {

    private final SessionService sessionService;

    public SessionController(SessionService sessionService) {
        this.sessionService = sessionService;
    }

    @PostMapping("/create")
    public ResponseEntity<Map<String, String>> createSession(@RequestBody Map<String, String> request){
        String email = request.get("email");
        String token = request.get("token");

        if (email == null || token == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "Faltan datos"));
        }

        sessionService.createSession(email, token);
        Map<String, String> response = Map.of("message", "Sesión creada correctamente");
        return ResponseEntity.ok(response);
    }


    @PostMapping("/validate")
    public ResponseEntity<Map<String, String>> validateSession(@RequestBody Map<String, String> request) {
        String token = request.get("token");

        if (token == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "Token faltante"));
        }

        boolean exists = sessionService.validateSession(token);
        return exists
                ? ResponseEntity.ok(Map.of("message", "Token válido"))
                : ResponseEntity.status(404).body(Map.of("error", "Token inválido"));
    }

    /*@GetMapping("/validate")
    public ResponseEntity<String> validateSession(@RequestParam String token) {
        boolean exists = sessionService.validateSession(token);
        return exists
            ? ResponseEntity.ok("Token válido")
            : ResponseEntity.status(404).body("Token inválido");
    }*/
}
