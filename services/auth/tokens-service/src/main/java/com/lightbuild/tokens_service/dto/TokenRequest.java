package com.lightbuild.tokens_service.dto;

public class TokenRequest {
    private String email;

    public TokenRequest() {}

    public TokenRequest(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
