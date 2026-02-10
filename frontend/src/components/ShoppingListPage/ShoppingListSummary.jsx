import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Store, Check, ChevronRight } from "lucide-react";

const storeInfo = {
    tesco: { name: "Tesco", color: "bg-blue-500" },
    aldi: { name: "Aldi", color: "bg-orange-500" },
    lidl: { name: "Lidl", color: "bg-yellow-500" },
    spar: { name: "Spar", color: "bg-green-600" },
};

export default function ShoppingListSummary({
    storeTotals,
    cheapestStore,
    potentialSavings,
    itemCount,
}) {

    const storedStores = Object.entries(storeTotals).sort((a, b) => a[1] - b[1]); //Todo: mas megkozelites

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
                            <p className='text-2xl text-primary'>
                                {potentialSavings} Euro
                            </p>
                        </div>
                    </div>


                </CardContent>

            </Card>

        </div>
    )
}
