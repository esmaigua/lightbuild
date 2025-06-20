package com.lightbuild.session_service.repository;

import com.lightbuild.session_service.model.Session;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SessionRepository extends JpaRepository<Session, Long> {
    boolean existsByToken(String token);
    Optional<Session> findByToken(String token);
}
/*package com.lightbuild.session_service.repository;

import com.lightbuild.session_service.model.Session;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionRepository extends JpaRepository<Session, Long> {
    boolean existsByToken(String token);
    Session findByToken(String token);
} */