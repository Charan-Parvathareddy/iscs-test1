'use client'
import React, { useState } from 'react'
import {motion, useScroll , useTransform} from 'framer-motion'


const Hero11 = () => {
  return (
    <div className='relative max-w lg:pt-32 md:px-10 mx-auto pt-16'>
    <div className='flex'>
   
        <div className='relative '>
       
            <img aria-hidden="true" className='' src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg" width="437" height="837" alt="" />
            
            <div style={{ background: 'linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)', marginLeft:'11px' }} className= " max-md:w-[2px] w-[3px] h-[450px] max-md:h-[650px] max-sm:h-[750px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md"></div>
        </div>
        
    </div>

    
</div>
  )
}

export default Hero11