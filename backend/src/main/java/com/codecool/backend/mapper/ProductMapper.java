package com.codecool.backend.mapper;

import com.codecool.backend.dto.ProductDto;
import com.codecool.backend.model.Product;

public class ProductMapper {

    public static ProductDto toDto(Product product) {
        return new ProductDto(
                product.getSku(),
                product.getName(),
                product.getCreatedAt(),
                product.getCategoryId()
        );
    }
}


