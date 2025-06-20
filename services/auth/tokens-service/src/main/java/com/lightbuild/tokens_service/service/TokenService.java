package com.lightbuild.tokens_service.service;

import com.lightbuild.tokens_service.util.JwtUtil;
import org.springframework.stereotype.Service;

@Service
public class TokenService {

    private final JwtUtil jwtUtil;

    public TokenService(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    public String generate(String subject) {
        return jwtUtil.generateToken(subject, 60); // duración de 60 minutos
    }

    public boolean validate(String token) {
        return jwtUtil.validateToken(token);
    }
}
