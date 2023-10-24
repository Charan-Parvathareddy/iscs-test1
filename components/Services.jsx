import React from 'react'
import {motion, useScroll , useTransform} from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Title, TitleSm } from "@/components/common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"


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
  
    
    scrollButton:{
      opacity:0,
      transition:{
        duration:2,
        repeat:Infinity
      }
   },
  }; 
  


const Values = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start","end start"]
    })
  const yText=useTransform(scrollYProgress,[0,1],["0%","500%"])    
  const yBg=useTransform(scrollYProgress,[0,1],["0%","300%"])
  return (
    <>
    <motion.div className='vservices'>
   
 
    <motion.div className='vtextContainer11' variants={textVariants} initial='initial' animate='animate'>
       
       <hr/>
      
   </motion.div>

      
        <br/>
            <br/>
           
            <br/>
        <motion.div className='vtitleContainer'>
        
        <motion.div className='vtitle'variants={textVariants} initial='initial' animate='animate'>
            <br/>
            <br/>
            <br/>
        
    <br/>
    <h1>
        Our <motion.b whileHover={{color :"white"}}>Services</motion.b>
    </h1>
    <br/><br/><br/><br/><br/><br/>
   
        </motion.div>
       
        
        <br/>
            <br/>


        


            <br/>
        </motion.div>

        <motion.div className='vtextContainer11' variants={textVariants} initial='initial' animate='animate'>
       
       <hr/>
       <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
   </motion.div>
        <section className='agency bg-top'>
        <div className='container'>
        <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='learn more' />
            ))}
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        </section>
        <motion.div className='vlistContainer'>
            
            
            <motion.div className='vbox' whileHover={{background:"indigo",color:"black"}}>
               
                <Title title='Project Out Sourcing' />
                <br/>
                <br/>
                <p className='desc-p '>Hire us to change your ideas into practicality by our end to end delivery of the project with our project outsourcing services. Our skilled experts ensure timely project delivery, cost-effectiveness, and exceptional quality. Collaborate with us to experience hassle-free project execution. </p>
                
            </motion.div>
            <motion.div className='vbox'  whileHover={{background:"indigo",color:"black"}}>
              
                <Title title='On Demand Developers' />
                
                <br/>
                <br/>
                <p className='desc-p '>
                Bridge any skillset gap with our pool of Developer on Demand service, available on both hourly and monthly contracts. Whether you need short-term support or long-term collaboration, our team will seamlessly integrate into your organization ensuring advanced technical expertise.
                </p>
                
            </motion.div>
            <motion.div className='vbox'  whileHover={{background:"indigo",color:"black"}}>
               
                <Title title='Tech and Talent Partner' />
                <br/>
                <br/>
                <p className='desc-p '>
                For your business growth, we go beyond conventional partnerships by providing comprehensive tech solutions and talent support. From driving innovation to streamlining operations, our experts act as an extension of your team, offering end-to-end support. </p>
                
            </motion.div>
           
        </motion.div>
    </motion.div>
    
    </>
  )
}

export default Values