package com.codecool.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    @GetMapping
    public Map<String, String> getAllProducts() {
        return Map.of("status", "ok");
    }
}
