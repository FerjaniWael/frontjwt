package com.bezkoder.spring.login.security.services;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

public class JwtTokenUtil {

    private static final String SECRET_KEY = "SecretSpringGenerationBus"; // Replace with your secret key
    private static final long TOKEN_VALIDITY_MILLISECONDS = 24 * 60 * 60 * 1000; // One day in milliseconds

    public static String generateToken(String username) {
        Date now = new Date();
        Date expirationDate = new Date(now.getTime() + TOKEN_VALIDITY_MILLISECONDS);

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(now)
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }
}

