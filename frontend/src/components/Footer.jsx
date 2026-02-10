import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
    termék: ["Price comparison", "Shopping list", "Árfigyelés"],
    boltok: ["Tesco", "Aldi", "Lidl", "Spar", "Penny", "Auchan"],
    cég: ["About us", "Contact", "Career"],
    jogi: ["Data protection", "Terms and Conditions", "Cookies"],
}

export function Footer() {
    return (
        <footer className="bg-foreground text-background">
            
            <div className="border-b border-background/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row! md:items-center! justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Stay informed about promotions!</h3>
                            <p className="text-background/70">Sign up for our newsletter and don't miss out on any promotions.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row! gap-3 sm:w-auto! w-full">
                            <Input
                                type="email"
                                placeholder="E-mail címed"
                                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 h-12"
                            />
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-5! gap-6">
                    
                    <div className="col-span-2 md:col-span-1!">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <ShoppingCart className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <span className="text-xl font-semibold">Grocerylytics</span>
                        </div>
                    </div>

                    
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-semibold mb-4 capitalize">{category}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

               
                <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-background/60">
                        © 2026 ÁrFigyelő. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-sm text-background/60 hover:text-background">
                            Facebook
                        </a>
                        <a href="#" className="text-sm text-background/60 hover:text-background">
                            Instagram
                        </a>
                        <a href="#" className="text-sm text-background/60 hover:text-background">
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}