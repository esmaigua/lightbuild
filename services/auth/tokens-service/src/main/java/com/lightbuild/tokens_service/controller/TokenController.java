package com.lightbuild.tokens_service.controller;

import com.lightbuild.tokens_service.dto.TokenRequest;
import com.lightbuild.tokens_service.dto.TokenResponse;
import com.lightbuild.tokens_service.service.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth/token")
public class TokenController {

    private final JwtService jwtService;

    public TokenController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @PostMapping("/generate")
    public ResponseEntity<TokenResponse> generateToken(@RequestBody TokenRequest request) {
        String token = jwtService.generateToken(request.getEmail());
        return ResponseEntity.ok(new TokenResponse(token));
    }

    @GetMapping("/validate")
    public ResponseEntity<String> validateToken(@RequestParam String token) {
        boolean isValid = jwtService.validateToken(token);
        return isValid
            ? ResponseEntity.ok("Token válido")
            : ResponseEntity.status(401).body("Token inválido");
    }
}
