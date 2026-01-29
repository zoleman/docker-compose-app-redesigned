import React from 'react'
import { WebLogo } from '../logos/WebLogo.jsx'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white border-b border-gray'>
      <div className='max-w-7x1 mx-auto sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>


          <WebLogo />
          <nav className='hidden  items-center gap-8 md:flex'>
            <a href="#" className='text-md font-medium text-foreground hover:text-primary transition-colors'>
              kezdolap
            </a>
            <a href="#" className='text-md font-medium text-foreground hover:text-primary transition-colors'>
              Összes termek
            </a>
            <a href="#" className='text-md font-medium text-foreground hover:text-primary transition-colors'>Kategóriák</a>
            <a href="#" className='text-md font-medium text-foreground hover:text-primary transition-colors'>Akciók</a>
            <a href="#" className='text-md font-medium text-foreground hover:text-primary transition-colors'>Bevásárlólista</a>
          </nav>
            <div className='flex items-center gap-4'>
              <button className='hidden md:flex bg-green-600 p-2 rounded-lg text-white text-md'>
                Bejelentkezés
              </button>
            </div>


        </div>
      </div>

    </header>
  )
}
