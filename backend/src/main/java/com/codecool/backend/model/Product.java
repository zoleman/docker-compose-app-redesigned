package com.codecool.backend.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "grocery")
public class Product {

    @Id
    @Column(name = "sku", nullable = false, updatable = false)
    private String sku;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "created_at", nullable = false)
    private LocalDate createdAt;

    @Column(name = "category_id", nullable = false)
    private Long categoryId;

    public Product() {
    }

    public Product(String sku, String name, LocalDate createdAt, Long categoryId) {
        this.sku = sku;
        this.name = name;
        this.createdAt = createdAt;
        this.categoryId = categoryId;
    }

    public String getSku() {
        return sku;
    }

    public String getName() {
        return name;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}


