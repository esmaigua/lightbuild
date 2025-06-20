package com.lightbuild.session_service.service;

import com.lightbuild.session_service.model.Session;
import com.lightbuild.session_service.repository.SessionRepository;
import org.springframework.stereotype.Service;

@Service
public class SessionService {

    private final SessionRepository sessionRepository;

    public SessionService(SessionRepository sessionRepository) {
        this.sessionRepository = sessionRepository;
    }

    public void createSession(String email, String token) {
        Session session = new Session(email, token);
        sessionRepository.save(session);
    }

    public boolean validateSession(String token) {
        return sessionRepository.existsByToken(token);
    }
}

