'use client'
import {HeroSection} from 'src/components'
import {useState} from 'react';
import emailjs from '@emailjs/browser';


export default function Home() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")




  async function handleForm(e){
    e.preventDefault();

    if (email && name && message){
      let res = await emailjs.send("service_ptsh8h8","template_kaxqtfq",{
        name,
        email,
        message,
      });
    
      console.log("Sending message", res)

      return () => {
        setMessage("")
        setName("")
        setEmail("")
        window.alert("Thank you for sending us a message.")
      }
    }
  }


  return (
    <div className="">
      <HeroSection />
    
      <div id="fh5co-contact" class="animate-box">
      <div class="container">
        <form onSubmit={handleForm}>
          <div class="row">
            <div class="col-md-6">
              <h3 class="section-title">Get In Touch </h3>
              <p>Please leave us a message, we're always happy to hear from you.</p>
              <ul class="contact-info">
                <li><i class="icon-location-pin"></i>198 West 21th Street, Suite 721 New York NY 10016</li>
                <li><i class="icon-phone2"></i>+1 (385) 3815 715 </li>
                <li><i class="icon-mail"></i><a href="mailto:info@littleheartsfoundation.org">info@littleheartsfoundation.org</a></li>
                <li><i class="icon-globe2"></i><a href="https://littleheartsfoundation.org">www.littleheartsfoundation.org</a></li>
              </ul>
            </div>
            <div class="col-md-6">
              <div class="row">

                <div class="col-md-6">
                  <div class="form-group">
                    <input value={name} onInput={e => setName(e.target.value)} required name="name" type="text" class="form-control" placeholder="Name" />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <input value={email} onInput={e => setEmail(e.target.value)} required name='email' type="email" class="form-control" placeholder="Email" />
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group">
                    <textarea value={message} onInput={e => setMessage(e.target.value)} required name="message" class="form-control" id="" cols="30" rows="7" placeholder="Message"></textarea>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group">
                    <input type="submit" value="Send Message" class="btn btn-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}
