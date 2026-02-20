import React, { useMemo } from 'react'
import { Card, CardHeader } from '../ui/card'
import Products from './Products'
import { useCart } from '@/helpers/useCart';
import { useEffect } from 'react';


function CategorySection({ products, selectedBrands, selectedCategories }) {
        const {addToCart} = useCart();

    // Fetch categories and log them to console — once when component mounts
    useEffect(() => {
        fetch('/api/categories')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                return response.json()
            })
            .then(data => {
                console.log('Fetched categories:', data)

                // Optional: more readable output
                console.group('Categories from backend')
                data.forEach(cat => {
                    console.log(`ID: ${cat.id} | Name: ${cat.name}`)
                })
                console.groupEnd()
            })
            .catch(error => {
                console.error('Failed to fetch categories:', error)
            })
    }, []) // empty dependency array → runs only once

    const filteredProducts = useMemo(() => {
        if(selectedBrands.length  > 0 && selectedCategories.length > 0){
            return products.filter(p => selectedBrands.includes(p.brand.id) && selectedCategories.includes(p.category.id))
        }
        if(selectedBrands.length  > 0){
            return products.filter(p => selectedBrands.includes(p.brand.id))
        } else if(selectedCategories.length > 0){
            return products.filter(p =>  selectedCategories.includes(p.category.id))
        }
        return products;
    }, [products, selectedCategories, selectedBrands])

    return (
        <>
            <section>
                <Card className="overflow-hidden">
                    {filteredProducts && filteredProducts.map(p => (
                        <Products key={p.id} product={p} addToCart={addToCart} />
                    ))}
                </Card>
            </section>
        </>
    )
}

export default CategorySection