'use client'
import {HeroSection} from 'src/components'
import Image from 'next/image'
// import styles from './page.module.css'


export default function Home() {

  function handleForm(e){
    e.preventDefault();
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
                <li><i class="icon-phone2"></i>+ 1235 2355 98</li>
                <li><i class="icon-mail"></i><a href="mailto:info@littleheartsfoundation.org">info@littleheartsfoundation.org</a></li>
                <li><i class="icon-globe2"></i><a href="https://littleheartsfoundation.org">www.littleheartsfoundation.org</a></li>
              </ul>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Email" />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea name="" class="form-control" id="" cols="30" rows="7" placeholder="Message"></textarea>
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
