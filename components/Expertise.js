import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import dynamic from "next/dynamic"
import Image from 'next/image'
import Link from "next/link"


const Expertise = () => {
  return (
    <>
   <section className='agency bg-top'>
     <div className='container'>
       <div className='content flex1'>
         <div className='left w-50 py'>
            <Title title='Let’s put AI to work together' />
              <p className='desc-p'>ISCS Consulting is the driving force behind your business transformation journey. We offer business consulting with expert advice and are all about working openly and bringing together different perspectives, experiences and essential AI and hybrid cloud technology to meet your business goals.</p>
              <p className='desc-p'>Recent developments within artificial intelligence (AI) have demonstrated the scale and power of this technology on business and society. However, businesses need to determine how to structure and govern these systems responsibly to avoid bias and errors as the scalability of AI technology can have costly effects to both business and society.</p>
              <p className='desc-p'>One thing we refuse to compromise on is AI ethics and responsibility. So let's work together to define your roadmap and scale trustworthy AI throughout your enterprise.</p>
         </div>
        <div className='right w-50 ml'>
             <Image
      src="/robot.png"
      width={550}
      height={500}
      alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
       </div>
        </div>
            
<section className='agency bg-top'>
        <div className='container'>
         <div className='content flex1'>
            <div className='left w-50 py'>
            <Image
      src="/ai.webp"
      width={550}
      height={500}
      alt="ai" className="w-[100%] h-[100%] relative z-[5]" />
     </div>
      <div className='right w-50 ml'>
            <Title title='Harness the power of Machine Learning and Generative AI' />
              <p className='desc-p'>We solve the toughest human problems through the transformative power of Artificial Intelligence.</p>
              <p className='desc-p'>We help you get started with a slightly different approach. Before we get into the trenches and kickstart development, we take a top-down approach with an AI Readiness Audit.</p>
              <p className='desc-p'>This involves really validating the idea, through qualitative and quantitative analysis of your datasets, identifying the best fit approach to model development, and putting together an implementation roadmap.</p>
             <p className="desc-p">All this before writing a single line of code, and investing heavily into the idea.</p>
             <p className="desc-p">Achieve more with less.</p>
             <br/>
             <br/>
      </div>
      </div>
             <br/>
             <br/>
     
          
        </div>
    </section>
    </div>
      </section>
    </>
  )
}

export default Expertise
