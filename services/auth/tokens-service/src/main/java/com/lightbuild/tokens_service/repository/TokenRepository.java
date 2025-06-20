package com.lightbuild.tokens_service.repository;

import com.lightbuild.tokens_service.model.TokenInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TokenRepository extends JpaRepository<TokenInfo, Long> {
    Optional<TokenInfo> findByToken(String token);
}
