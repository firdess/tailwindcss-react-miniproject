import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

export default function Header() {
  return (
    <div className='header '>
      <div className='container mx-auto'>
        <div className='max-w-custom  mx-auto bg-white px-[45px] py-[44px] rounded-[5px] flex justify-between items-center'>
          <Logo />
          <Navbar />
        </div>
      </div>
    </div>
  )
}
