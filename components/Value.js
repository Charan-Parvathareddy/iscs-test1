import React from "react"
import { Title, TitleSm } from "@/components/common/Title"
import Link from "next/link"
import {motion, useScroll , useTransform} from 'framer-motion'
import { useRef } from 'react'
import Values from "./Values"

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

const Value = () => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({
      target:ref,
      offset:["start start","end start"]
  })
const yText=useTransform(scrollYProgress,[0,1],["0%","500%"])    
const yBg=useTransform(scrollYProgress,[0,1],["0%","500%"])    

  return (
  <section className='agency bg-top'>
   <div className='container'>
   <div className='content flex1'>
    <motion.div className='left w-70 '  variants={textVariants} initial='initial' animate='animate'>
      <Title title='We turn your business ideas into smart digital products' />
        <p className='desc-p '>We are a diverse team with unique perspectives. United in our purpose, our strategy and our culture. Driven by our ambition and the power of technology to drive human progress. Unwavering in our commitment to equality, trust and advocacy for one another.</p>
        <p className='desc-p'>At ISCS Technologies, we are innovation pioneers driving the digital revolution forward. Together, and as individuals, our passion and unique perspectives propel every idea, concept and solution we create. By embracing our differences and investing time in our diversity, our leaders foster a culture of innovation and inclusion that enables us to create technology that ensures widespread accessibility and impactful improvements to daily life.</p>
        <p className='desc-p'>From hybrid cloud solutions to high-performance computing to ambitious social impact and sustainability initiatives, what we do impacts everyone, everywhere.</p>

    <div className='grid-3'>
      
          <div className='box'>
            <h1 className='indigo'>10+</h1>
            <p className="p1">Years of experience</p>
            
            </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <p className="p1">Successful cases</p>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <p className="p1">Industry awards</p>
                </div>
    </div>
              
              <br/><br/><br/><br/><br/><br/>
              </motion.div>
            <motion.div className='right w-40 '  variants={textVariants} initial='initial1' animate='animate1'>
              <img src='/images/altum.jpg' alt='Img' className='round' width='100%' height='68%' />   
            </motion.div>
          </div>
           </div>
     
           <Values/>
           </section>
  
    
  )
}

export default Value


