import React from 'react'
import'./Contact.css'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b0079614-9f5c-4eca-872a-aec32d850e21");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <hr/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I provide professional web development services tailored to your business needs.whether you're looking to launch a new website, redesing an existing one,or develop a custom web application,I turn your ideas into a fast, secure,responsive digital solution</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src="https://ts1.mm.bing.net/th?id=OIP.MvrHgBzLaVfvb9k54h2iqwHaHa&pid=15.1" alt="" /> <p>sanusingh5607@gamil.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src="https://th.bing.com/th/id/OIP.XpdRjcGUf5hIgENI2hpoUQHaHa?w=192&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /> <p>+7439025607</p>
                        </div>
                        <div className="contact-detail">
                        <img src="https://th.bing.com/th/id/OIP.a5XKqDEmKCmv7px_clTp3AHaHa?w=211&h=211&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /> <p>Kolkata,west Bengal</p>
                        </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">your name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email"  placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows={'8'} placeholder='Enter your message'></textarea>
                <button type='sumit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
