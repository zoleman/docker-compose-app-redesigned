import React, { useState } from 'react';
import { Input } from "@/components/ui/Input.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { Search, TrendingDown, Clock, ShoppingBag } from "lucide-react";

function HeroSection() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <section className="relative overflow-hidden bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

                {/* Wrapper */}
                <div className="flex flex-col space-y-16">

                    {/* HERO CONTENT */}
                    <div className="space-y-8 max-w-3xl w-full">
                        <div className="space-y-4">


                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                               Compare the{" "}
                                <span className="text-primary">food prices</span>{" "}
                                in one place
                            </h1>

                            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                                 Search for any product and find the best price from the largest Global stores.
                            </p>
                        </div>

                        {/* SEARCH */}
                        <div className="flex  sm:flex-row gap-3 w-full">
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder="Keress termékre... pl. tej, kenyér, alma"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-12 h-14 text-base bg-background border-border"
                                />
                            </div>
                            <Button size="lg" className="h-14 px-8">
                                Search
                            </Button>
                        </div>
                        {/* POPULAR */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm text-muted-foreground">Popular:</span>
                            {["Milk", "Bread", "Chicken breast", "Egg", "Banana"].map((prod) => (
                                <button
                                    key={prod}
                                    className="px-3 py-1.5 bg-secondary hover:bg-secondary/80 rounded-full text-sm font-medium text-secondary-foreground transition-colors hover:cursor-pointer"
                                    onClick={() => setSearchQuery(prod)}
                                >
                                    {prod}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-2 gap-4 lg:gap-6">
                        <div className="col-span-2 bg-primary/5 border border-primary/10 rounded-2xl p-6 space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <ShoppingBag className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-foreground">50,000+</p>
                                    <p className="text-sm text-muted-foreground">Compared product</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-background border border-border rounded-2xl p-5 space-y-2">
                            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                                <TrendingDown className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-2xl font-bold text-foreground">12+</p>
                            <p className="text-sm text-muted-foreground">Store offerings</p>
                        </div>

                        <div className="bg-background border border-border rounded-2xl p-5 space-y-2">
                            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                                <Clock className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-2xl font-bold text-foreground">Daily</p>
                            <p className="text-sm text-muted-foreground">Updated prices</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default HeroSection