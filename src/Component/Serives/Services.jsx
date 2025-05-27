import React from 'react'
import'./Services.css'
import Services_data from '../../assets/Services-data'
const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My services</h1>
        <hr/>
      </div>
      <div className="services-container">
        {Services_data.map((services,index)=>{
          return <div key={index} className="services-formate">
            <h3>{services.s_no}</h3>
            <h2>{services.s_name}</h2>
            <p>{services.s_desc}</p>
            <div className="services-readmore">
              <p>Read More</p>
              <img src="https://th.bing.com/th/id/OIP.ztP-GRMqeTOyxOpTFTMC4gHaHa?w=213&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={'30px'}/>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services
