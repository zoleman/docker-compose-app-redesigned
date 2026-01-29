import React from 'react'
import {CartSvg} from './CartSvg.jsx'

export const WebLogo = () => {
    return (
        <>
            <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <CartSvg />
                </div>
                <span className="text-2xl font-semibold text-foreground">ÁrFigyelő</span>
            </div >
        </>
    )
}
