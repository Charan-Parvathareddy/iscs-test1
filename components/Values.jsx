import React from 'react'
import {motion, useScroll , useTransform} from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Title, TitleSm } from "@/components/common/Title"




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
const sliderVariants ={
  initial :{
    x:0,
    
  },
  animate :{
    x:"-220%",
    
    transition :{
      duration : 20,
      repeat:Infinity,
      
    },
    },
   
}; 

const variants={
  initial:{
    x:-500,
    y:100,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition :{
     duration : 1,
     staggerChildren : 0.1 ,
    },
  }
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
   <motion.div className='vtextContainer' variants={textVariants} initial='initial' animate='animate'>
            <p>
                We focus on helping your brand grow
                <br/> and move forward
                 </p>
            <hr/>
           </motion.div>
            <br/>
            <br/>
            <br/>
        <motion.div className='vtitleContainer'>
        <motion.div className='vtitle'variants={textVariants} initial='initial1' animate='animate1'>
            <br/>
            <br/>
            <br/>
        <img
      src="/people.webp"
      alt="ISCS Technologies"
        />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <h1>
        Our  <motion.b whileHover={{color :"white"}}>Values</motion.b>
    </h1>
    </motion.div>
    <br/>
    <br/>
    <br/>
    </motion.div>
    <motion.div className='vlistContainer'variants={textVariants}  initial='initial1' animate='animate1'>
    <motion.div className='vbox' whileHover={{background:"indigo",color:"black"}}>
               <Title title='Integrity' />
                <br/>
                <br/>
                <p className='desc-p '>Following the highest standards of professionalism and being recognized for doing so. Integrity for us means not only financial and intellectual integrity, but encompasses all other forms as are generally understood.
                </p>
    </motion.div>
   <motion.div className='vbox'  whileHover={{background:"indigo",color:"black"}}>
             <Title title='Seamlessness' />
                <br/>
                <br/>
                <p className='desc-p '>
                Thinking and working together across functional groups and hierarchies. Leveraging diverse competencies and perspectives to garner the benefits of synergy while promoting organizational unity through collaborative efforts.
                </p>
                </motion.div>
  <motion.div className='vbox'  whileHover={{background:"indigo",color:"black"}}>
              <Title title='Commitment' />
                <br/>
                <br/>
                <p className='desc-p '>
                On the foundation of integrity, doing all that is needed to deliver value to all stakeholders. In the process, being accountable for our own actions and decisions, those of our team and those on the part of the organization for which we are responsible.
                </p>
  </motion.div>
  <motion.div className='vbox' whileHover={{background:"indigo",color:"black"}}>
             <Title title='Speed' />
                <br/>
                <br/>
                <p className='desc-p '>
                Speed is often used as a differentiating factor in the business world. Responding to internal and external customers with a sense of urgency. Continuously striving to finish before deadlines and choosing the best rhythm to optimize organizational efficiencies.
                </p>
  </motion.div>
  </motion.div>
  </motion.div>
  <br/><br/><br/><br/>
  
  </>
  )
}

export default Values