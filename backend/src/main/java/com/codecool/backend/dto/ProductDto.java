package com.codecool.backend.dto;

public record ProductDto(
        Integer id,
        String store,
        String name,
        String category,
        Double price,
        String unit,
        Double pricePerUnit
) {}


