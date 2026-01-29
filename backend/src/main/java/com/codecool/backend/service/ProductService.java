package com.codecool.backend.service;

import com.codecool.backend.dto.ProductDto;
import com.codecool.backend.mapper.ProductMapper;
import com.codecool.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<ProductDto> getAllProducts() {
        return repository.findAll()
                .stream()
                .map(ProductMapper::toDto)
                .toList();
    }
}

