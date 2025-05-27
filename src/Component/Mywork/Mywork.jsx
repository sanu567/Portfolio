import React from 'react'
import'./Mywork.css'
import mywork_data from '../../assets/mywork_data'

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest work</h1>
        <hr/>
      </div>
      <div className="mywork-container">
        {
          mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt="" />
          })
        }
      </div>
      <div className="mywork-showmore">
        <p>Show more</p>
        <img src="https://th.bing.com/th/id/OIP.ztP-GRMqeTOyxOpTFTMC4gHaHa?w=213&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={'30px'}/>
      </div>
    </div>
  )
}

export default Mywork
