import React, { useState } from "react";

import { Badge } from "@/components/ui/badge";
import {
    Check,
    Trash2,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import unitConverter from "@/helpers/unitConverter";

function NoteItem({ item, onToggle, onDelete, storeInfo }) {
    const [expanded, setExpanded] = useState(false);

    const sortedPrices = [...item.prices].sort(
        (a, b) => a.price - b.price
    );

    const cheapest = sortedPrices[0];
    const cheapestPrice = cheapest.price;
    const cheapestStoreKey = cheapest.storeName.toLowerCase();

    const mostExpensivePrice =
        sortedPrices[sortedPrices.length - 1]?.price ?? cheapestPrice;

    const savings = (mostExpensivePrice - cheapestPrice).toFixed(2);


    return (
        <div
            className={`group relative border-b border-border/50 last:border-b-0 transition-all ${item.checked ? "opacity-60" : ""
                }`}
        >
            <div className="flex items-start gap-3 py-4 px-2">
                {/* Checkbox */}
                <button
                    onClick={() => onToggle(item.id)}
                    className={`mt-1 shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${item.checked
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-muted-foreground/40 hover:border-primary"
                        }`}
                >
                    {item.checked && <Check className="h-4 w-4" />}
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                        <span
                            style={{ fontFamily: 'var(--font-handwriting)' }}
                            className={`text-xl ${item.checked ? "line-through text-muted-foreground" : "text-foreground"
                                }`}
                        >
                            {item.name}
                        </span>
                        <div className="flex items-center gap-2">
                            {!item.checked && savings > 0 && (
                                <Badge variant="outline" className="text-xs border-primary/30 text-primary bg-primary/5">
                                    -{savings > 0 || savings === null ? 0 : savings} Euro
                                </Badge>
                            )}
                            <button
                                onClick={() => onDelete(item.id)}
                                className="opacity-0 group-hover:opacity-100 p-1 text-muted-foreground hover:text-destructive transition-all"
                            >
                                <Trash2 className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mt-1">
                        <span style={{ fontFamily: 'var(--font-handwriting)' }} className="text-muted-foreground">
                            {unitConverter(item.quantity,item.unit)}
                        </span>
                        {!item.checked && (
                            <>
                                <span className="text-muted-foreground">·</span>
                                <span className="text-sm text-primary font-medium">
                                    {cheapestPrice} Euro
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    ({storeInfo[cheapestStoreKey]?.name})
                                </span>

                            </>
                        )}
                    </div>

                    {/* Expandable prices */}
                    {!item.checked && (
                        <>
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="flex items-center gap-1 mt-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {expanded ? (
                                    <>
                                        <ChevronUp className="h-3 w-3" />
                                        Price hiding
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown className="h-3 w-3" />
                                        View all
                                    </>
                                )}
                            </button>

                            {expanded && (
                                <div className="mt-3 grid grid-cols-2 gap-2">
                                    {sortedPrices.map(({ storeName, price }, index) => {
                                        const key = storeName.toLowerCase();

                                        return (
                                            <div
                                                key={key}
                                                className={`flex items-center justify-between p-2 rounded-lg text-sm ${index === 0
                                                    ? "bg-primary/10 border border-primary/20"
                                                    : "bg-muted/50"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className={`w-2 h-2 rounded-full ${storeInfo[key]?.color ?? "bg-muted-foreground"
                                                            }`}
                                                    />
                                                    <span className="text-foreground">
                                                        {storeInfo[key]?.name ?? storeName}
                                                    </span>
                                                </div>

                                                <span
                                                    className={
                                                        index === 0
                                                            ? "font-medium text-primary"
                                                            : "text-muted-foreground"
                                                    }
                                                >
                                                    {price} Euro
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NoteItem