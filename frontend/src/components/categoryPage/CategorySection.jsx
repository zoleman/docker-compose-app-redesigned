import React, { useMemo } from 'react'
import { Card, CardHeader } from '../ui/card'
import Products from './Products'
import { useCart } from '@/helpers/useCart';


function CategorySection({ products, selectedBrands, selectedCategories }) {
        const {addToCart} = useCart();


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