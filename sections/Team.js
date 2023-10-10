import { teamdata, teamdata1 } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import team from "@/pages/team"
import React from "react"

const Team = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='JOIN OUR TEAM' /> <br />
            <br />
            <Title title='A team of smart & passionate creatives' className='title-bg' />
          </div>
          <div  style={{ width: "150px", height: "150px"}} >
          
          {teamdata1.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
          <div className='grid-4 py'>
            {teamdata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
