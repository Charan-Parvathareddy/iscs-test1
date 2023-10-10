import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import Value from "@/components/Value"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"
import Image from 'next/image'
import Hover from '@/components/Hover.js'


const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div>
          <Image
      src="/logo.svg"
      width={300}
      height={120}
      alt="ISCS Technologies"
    />
          </div>
          <h1 className='hero-title'>Innovative Strategic Consulting Services</h1>
          

          <div className='sub-heading'>
         
        
            <TitleSm title='Capable' /> <span>.</span>
            <TitleSm title='Available' /> <span>.</span>
            <TitleSm title='Flexible' />
          
          
          </div>
  
        
        </div>
       
       
      </section>
     
      <section className='hero-sec'>
      
        <div className='container'>
          <div className='heading-title'>
          
            <Title title='Welcome to ISCS Technologies' />
            <p>ISCS Technologies offers IT Enterprise Business Solutions, Various Industry Specific IT Products and Resource Consulting Services Globally.

ISCS’s clientele believes in its Flexible engagement models with availability of capable & qualified resources who are continuously providing the Quality services at value-based pricing across India, USA , Canada, and Australia regions.</p>
          </div>

          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon} </span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <br/>
      <br/>
      <br/>
      
<Hover/>
      <Value />
      <Expertise />
     
      
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Latest Articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
