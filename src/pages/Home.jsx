import React from 'react'
import PropertyButton from '../Components/Buttons/PropertyButton'
import Header from '../Components/Header'

export default function Home() {
  return (
    <div className='wrapper '>
      <div className='bg-[linear-gradient(140deg,#FFF6F2_0%,#EEC1AC_100%)]   relative z-0'>
        <img src='./images/topicon.png' className='absolute top-0 right-0 -z-10' />
        <img src='./images/lefticon.png' className='absolute bottom-0 -z-10' />
        <img src='./images/home..png' className='absolute right-0 -z-10 bottom-0' />
        <div className='container mx-auto max-w-custom pt-[99px]'>
          <Header />
          <div className='container  max-w-custom mt-[142px] w-[609px] pb-[135px] '>
            <div className='px-[14px] py-[9px] inline-flex gap-[10px] mb-[38px] items-end bg-[linear-gradient(270deg,#F3D1C1_0%,rgba(255,178,141,0.00)_100%)]'>
              <img src='./images/home.svg' />
              <span className='text-linkColor font-displayFont text-[20px] font-normal leading-[17px] tracking-[5.5px] uppercase'>Real Estate Agency</span>
            </div>
            <div className='mb-[38px]'>
              <h1 className='mb-[38px]'>Find the perfect place to
                Live with your family</h1>
              <p className='textP'>
                Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate.
              </p>
            </div>
            <PropertyButton />
          </div>
        </div>
      </div>

    </div>
  )
}
