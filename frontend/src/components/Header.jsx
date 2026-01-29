import React from 'react'
import { WebLog } from '../logos/WebLogo.jsx'

export default function Header() {
  return (
    <header>
        <WebLogo />
        <nav className='items-center gap-8'>
            <a href="#" className='text-sm font-sans'>
                kezdolap
            </a>
        </nav>

    </header>
  )
}
