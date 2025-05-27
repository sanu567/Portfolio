import React from 'react'
import'./Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-left">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis recusandae deserunt nihil. Hic, asperiores quidem debitis necessitatibus placeat fugit, at laboriosam numquam distinctio incidunt nisi. Rerum quibusdam corrupti tempore provident?</p>
            </div>
            <div className="footer-right">
                <div className="footer-email-input">
                    <img src="https://th.bing.com/th/id/OIP.4j4jNaPU3bIzDJHBj6HDSwHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={'35px'}/>
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-sub">Subscribe</div>
            </div>
        </div>
      <hr/>
      <div className="footer-bottom">
        <p className='footer-bottom-left'>@ 2025 Sanu singh.All right reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
