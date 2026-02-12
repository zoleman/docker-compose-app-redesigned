import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Store, Check } from "lucide-react";


export default function ShoppingListSummary({
    storeTotals,
    cheapestStore,
    potentialSavings,
    itemCount,
}) {

    const COLORS = [
        "bg-blue-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-orange-500",
        "bg-purple-500",
        "bg-pink-500",
    ];

    const storeInfo = React.useMemo(() => {
        const info = {};
        let colorIndex = 0;

        Object.keys(storeTotals).forEach((storeKey) => {
            info[storeKey] = {
                name: storeKey.charAt(0).toUpperCase() + storeKey.slice(1),
                color: COLORS[colorIndex % COLORS.length],
            };
            colorIndex++;
        });

        return info;
    }, [storeTotals]);



    const sortedStores = Object.entries(storeTotals).sort((a, b) => a[1] - b[1]); 

    return (
        <div className='space-y-4 lg:sticky! lg:top-24! '>

            <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                    <div className='flex items-center gap-3 mb-4'>
                        <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
                            <TrendingDown className='h-6  w-6 text-primary' />
                        </div>
                        <div>
                            <p className='text-sm text-muted-foreground'>
                                Potencial Saving
                            </p>
                            <p className='text-2xl font-bold text-primary'>
                                {potentialSavings} Euro
                            </p>
                        </div>
                    </div>
                    <p className='text-sm text-muted-foreground'>
                        If you shop at the cheapest store, all your products
                    </p>
                </CardContent>
            </Card>
            {/* Store Comparison */}
            <Card>
                <CardHeader className="pb-4">
                    <CardTitle className="text-base flex items-center gap-2">
                        <Store className='h-5 w-5' />
                        Store comparison
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {sortedStores.map(([store, total]) => {
                        const isCheapest = store === cheapestStore
                        const info = storeInfo[store]

                        return (
                            <div
                                key={store}
                                className={`flex items-center justify-between p-4 rounded-lg transition-colors ${isCheapest
                                    ? "bg-primary/10 border border-primary/20"
                                    : "bg-muted/50 hover:bg-muted"
                                    }`}
                            >
                                <div className='flex items-center gap-3 flex-1'>
                                    <div className={`w-4 h-4 rounded-full shrink-0 ${info.color}`} />
                                    <div className='flex items-center gap-2'>
                                        <span
                                            className={`font-medium ${isCheapest ? "text-primary" : "text-foreground"}`}
                                        >
                                            {info.name}
                                        </span>
                                        {isCheapest && (
                                            <Badge className="bg-primary text-primary-foreground text-sm">
                                                <Check className='h-3 w-3 mr-1' />
                                                Cheapest
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <p
                                        className={`font-semibold ${isCheapest ? "text-primary" : "text-foreground"
                                            }`}
                                    >
                                        {total.toFixed(2)} Euro
                                    </p>
                                    {!isCheapest && (
                                        <p className='text-sm text-muted-foreground'>
                                            +{(total - storeTotals[cheapestStore]).toFixed(2)} Euro
                                        </p>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </CardContent>
            </Card>
        </div>
    )
}
