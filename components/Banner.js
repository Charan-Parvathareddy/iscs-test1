import React from "react"
import { Title, TitleLogo } from "./common/Title"
import { useRouter } from "next/router"


const Banner = () => {
  const handleClick = () => {
    router.push('/contact');
  };

  const router = useRouter()

  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='We are looking forward to start a new project' /> <br />
            <TitleLogo title='Lets take your business to the next level!' />
          </div>
          <div>
            <button className='button-primary' onClick={handleClick} >Request a call-back</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
