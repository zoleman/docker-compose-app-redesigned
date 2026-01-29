package com.codecool.backend.dto;

import java.time.LocalDate;

public record ProductDto(
        String sku,
        String name,
        LocalDate createdAt,
        Long categoryId
) {}


