import { Badge, Check, Minus, Plus, ShoppingBasket } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import unitConverter from '@/helpers/unitConverter';
import { useCart } from '@/helpers/useCart';


function Products({ product,addToCart }) {


    const [cartQuantity, setCartQuantity] = useState(1);

    const updateQuantity = (number) => {
        setCartQuantity((prev) => prev + number > 0 ? prev + number : prev)
    }


    return (
        <div
            key={product.id}
            className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
        >
            <div className="flex flex-col lg:flex-row! gap-6">
                {/* Product Info */}
                <div className="flex items-start gap-4 shrink-0">
                    <div className="w-20 h-20 bg-muted rounded-xl flex items-center justify-center overflow-hidden">
                        <div className="w-16 h-16 bg-secondary rounded-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                            <div>
                                <p className="text-xs text-muted-foreground">{product.brand.name}</p>
                                <h3 className="font-semibold text-foreground">{product.name}</h3>
                                <p className="text-sm text-muted-foreground">{unitConverter(product.quantity,product.unit)}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Price Comparison */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-4! gap-4">
                    {product.prices.map((priceInfo) => (
                        <div
                            key={priceInfo.storeName}
                            className={`relative p-4 rounded-xl border transition-all ${priceInfo.cheapest
                                ? "bg-primary/5 border-primary"
                                : "bg-muted/50 border-transparent"
                                }`}
                        >
                            {priceInfo.cheapest && (
                                <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs">
                                    <Check className="w-3 h-3 mr-1" /> Best price
                                </Badge>
                            )}
                            <p className="text-xs font-medium text-muted-foreground mb-1">
                                {priceInfo.storeName}
                            </p>
                            <div className="flex items-baseline gap-1">
                                <span
                                    className={`text-xl font-bold ${priceInfo.cheapest ? "text-primary" : "text-foreground"
                                        }`}
                                >
                                    {priceInfo.price}
                                </span>
                                <span className="text-sm text-muted-foreground">Euro</span>
                            </div>
                            {priceInfo.discount && priceInfo.originalPrice && (
                                <p className="text-xs text-muted-foreground line-through">
                                    {priceInfo.originalPrice} Euro
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                <div className='grid grid-cols-1'>
                    <Button onClick={() => {
                        addToCart(product,cartQuantity)
                        console.log(product)
                    }}>
                        <ShoppingBasket className='h-3 w-3' />
                        <span className='font-semibold'>Add to Cart</span>
                    </Button>
                    <div className='flex items-center justify-between m-1.5 '>
                        <Button
                            onClick={() => updateQuantity(-1)}
                            className="size-6 bg-muted-foreground"
                        > <Minus className='h-2 w-2' /> </Button>
                        <p>{cartQuantity}</p>
                        <Button
                            onClick={() => updateQuantity(1)}
                            className="size-6 bg-muted-foreground"
                        > <Plus className='h-2 w-2' /> </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products