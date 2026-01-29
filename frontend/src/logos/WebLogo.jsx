import React from 'react'
import {CartSvg} from './CartSvg.jsx'

export const WebLogo = () => {
    return (
        <>
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <CartSvg />
                </div>
                <span className="text-xl font-semibold text-foreground">ÁrFigyelő</span>
            </div >
        </>
    )
}
