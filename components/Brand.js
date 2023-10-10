import React from "react"
import { Title } from "./common/Title"
import { brand } from "@/assets/data/dummydata"
import Marquee from "react-fast-marquee";
import Image from 'next/image'

const Brand = () => {
  return (
    <>
      <section className='brand'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='WE ARE PROUD TO WORK WITH THESE COMPANIES' />
          </div>
          <Marquee>
          <div className='brand-content grid-6 py'>
            {brand.map((item) => (
              <div className='images' key={item.id}>
                <img src={item.cover} alt={item.id} width='80%' height='50%' />
              </div>
              
            ))}
          </div>
          </Marquee>
        </div>
      </section>




    </>
  )
}

export default Brand
