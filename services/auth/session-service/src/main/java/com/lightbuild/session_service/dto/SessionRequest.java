package com.lightbuild.session_service.dto;

public class SessionRequest {
    private String userEmail;
    private String token;

    // Getters y setters
    public String getUserEmail() { return userEmail; }
    public void setUserEmail(String userEmail) { this.userEmail = userEmail; }

    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }
}
