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
import Services from "@/components/Services"
import "../styles/Home.module.scss"
import Parallax from "@/components/Parallax"
import {motion, useScroll , useTransform} from 'framer-motion'
import { useRef } from 'react'


const textVariants ={
  initial :{
    x:-500,
    opacity:0,
  },
  animate :{
    x:0,
    opacity:1,
    transition :{
      duration : 1,
      staggerChildren : 0.1,
    },
    },
    initial1 :{
      y:-500,
      opacity:0,
    },
    animate1 :{
      y:0,
      opacity:1,
      transition :{
        duration : 1,
        staggerChildren : 0.1,
      },
      },
      initial2 :{
        y:500,
        opacity:0,
      },
      animate2 :{
        y:0,
        opacity:1,
        transition :{
          duration : 1,
          staggerChildren : 0.1,
        },
        },
scrollButton:{
    opacity:0,
    transition:{
      duration:2,
      repeat:Infinity
    }
 },
}; 

const Hero = () => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({
      target:ref,
      offset:["start start","end start"]
  })
const yText=useTransform(scrollYProgress,[0,1],["0%","500%"])    
const yBg=useTransform(scrollYProgress,[0,1],["0%","300%"])
const forwardX = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
return (
    <>
    <section className='hero'>
      <motion.div className='container'variants={textVariants} initial='initial1' animate='animate1'>
        <div>
          <Image
      src="/logo.svg"
      width={300}
      height={120}
      alt="ISCS Technologies"
    />
     </div>
     <motion.h1 className='hero-title' variants={textVariants} initial='initial' animate='animate'>Innovative Strategic Consulting Services</motion.h1>
     <motion.div className='sub-heading' variants={textVariants} initial='initial' animate='animate'>
          <TitleSm title='Capable' /> <span>.</span>
          <TitleSm title='Available' /> <span>.</span>
          <TitleSm title='Flexible' />
        </motion.div>
        <motion.div style={{x:yBg}}className='stars'></motion.div>
          <br/>
          <br/>
          <br/>
          <motion.img variants={textVariants} animate="scrollButton"
      src="/scroll.png"
      width={50}
      height={50}
      alt="ISCS Technologies"
    />
     </motion.div>
     </section>
     
     <section className='hero-sec'>
       <motion.div style={{x:forwardX}}className='stars'></motion.div>
     <br/>
     <div className='container'>
      <motion.div className='heading-title' variants={textVariants} initial='initial1' animate='animate1'>
      <Title title='Welcome to ISCS Technologies' />
      <p>ISCS Technologies offers IT Enterprise Business Solutions, Various Industry Specific IT Products and Resource Consulting Services Globally.
         ISCS’s clientele believes in its Flexible engagement models with availability of capable & qualified resources who are continuously providing 
         the Quality services at value-based pricing across India, USA , Canada, and Australia regions.
         </p>
          </motion.div>
          <motion.div className='hero-content grid-4' variants={textVariants} initial='initial' animate='animate'>
            {home.map((item, i) => (
              <div className='box' key={i} >
                <span className='green'>{item.icon} </span> <br />
                <br />
                <h3 className='synopsis'>{item.title}</h3>
              </div>
               ))}
          </motion.div>
          </div>
      </section>
      <motion.div className='heading-title' variants={textVariants} initial='initial1' animate='animate1'>
       <br />
       <Title title='We dream, we dare and we aspire to deliver the incredible in everything we do from designing strategy to delivering impact.'/>
       </motion.div>
          <Value />
          <br/><br/><br/><br/><br/><br/>
          <Services/>
          <br/><br/><br/><br/><br/><br/>
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
