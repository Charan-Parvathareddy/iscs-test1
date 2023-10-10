import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import dynamic from "next/dynamic"

const Expertise = () => {
  const Spline = dynamic(() => import("@splinetool/react-spline"), {
    loading: () => <p>Loading...</p>,
  })
 
  return (
    <>
       <section className='agency bg-top'>
        <div className='container'>
         <div className='content flex1'>
            <div className='left w-50 py'>
              <Title title='Turning your business ideas into smart digital products since 2001' />
              <p className='desc-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eleifend magna, molestie iaculis sem pulvinar eu. Etiam non dui felis. Proin posuere dapibus magna laoreet posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim, sem eget sollicitudin tempor, libero velit aliquam enim, vel egestas tortor ante quis sem.</p>
              <p className='desc-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eleifend magna, molestie iaculis sem pulvinar eu. Etiam non dui felis. Proin posuere dapibus magna laoreet posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim, sem eget sollicitudin tempor, libero velit aliquam enim, vel egestas tortor ante quis sem.</p>
             </div>
             <div className='right w-50 ml'>
          <Spline scene="https://prod.spline.design/x80ZL67KtZKcaFxQ/scene.splinecode" />
            </div>
             </div>
<div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='learn more' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
