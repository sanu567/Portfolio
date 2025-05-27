import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from'../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {
  const[menu,setMenu]=useState("home");
  const menuRef = useRef();

  const openmenu=()=>{
    menuRef.current.style.right="0";
  }
  const closemenu=()=>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" width={'90px'}  />
      <img onClick={openmenu} src="https://th.bing.com/th/id/OIP.5ViNCl7f5Ph23rRDnnHCcwHaHa?w=200&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={"50px"} className='nav-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img onClick={closemenu} src="https://th.bing.com/th/id/OIP.X5OKj790ssFbd5jUy6YQmwHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={"50px"} className="nav-close" />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<hr/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"?<hr/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<hr/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<hr/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Connect with me</p></AnchorLink></div>
    </div>
  )
}

export default Navbar
