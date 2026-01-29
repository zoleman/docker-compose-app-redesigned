package com.codecool.backend.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String store;

    private String name;

    private String category;

    private Double price;

    private String unit;

    @Column(name = "price_per_unit")
    private Double pricePerUnit;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "product_url")
    private String productUrl;

    @Column(name = "in_stock")
    private Boolean inStock;

    @Column(name = "scraped_at")
    private LocalDateTime scrapedAt;

    public Product() {}

    public Product(String store, String name, String category, Double price, String unit,
                   Double pricePerUnit, String imageUrl, String productUrl,
                   Boolean inStock, LocalDateTime scrapedAt) {
        this.store = store;
        this.name = name;
        this.category = category;
        this.price = price;
        this.unit = unit;
        this.pricePerUnit = pricePerUnit;
        this.imageUrl = imageUrl;
        this.productUrl = productUrl;
        this.inStock = inStock;
        this.scrapedAt = scrapedAt;
    }

    public Integer getId() { return id; }

    public String getStore() { return store; }
    public void setStore(String store) { this.store = store; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public String getUnit() { return unit; }
    public void setUnit(String unit) { this.unit = unit; }

    public Double getPricePerUnit() { return pricePerUnit; }
    public void setPricePerUnit(Double pricePerUnit) { this.pricePerUnit = pricePerUnit; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getProductUrl() { return productUrl; }
    public void setProductUrl(String productUrl) { this.productUrl = productUrl; }

    public Boolean getInStock() { return inStock; }
    public void setInStock(Boolean inStock) { this.inStock = inStock; }

    public LocalDateTime getScrapedAt() { return scrapedAt; }
    public void setScrapedAt(LocalDateTime scrapedAt) { this.scrapedAt = scrapedAt; }
}


