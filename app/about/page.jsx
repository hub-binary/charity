// 'use-client'
import {HeroSection, HappySection, GallerySection} from 'src/components'
import Image from 'next/image'
// import styles from './page.module.css'


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      
      <HappySection />

      <GallerySection />
      
      <div id="fh5co-content-section" class="fh5co-section-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h3>Leadership</h3>
              <p>Meet the Pioneers of this great mission of Hope and Kindness.</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row" style={{justifyContent: 'center !important'}}>
            <div class="col-md-4">
              <div class="fh5co-team text-center animate-box">
                <figure>
                  <img src="/assets/images/person_1.jpg" alt="Co-Founder" />
                </figure>

                <div>
                  <h3>Jean Doe</h3>
                  <p><span>Founder</span></p>
                  <p>Far far away, there live the blind texts.</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="fh5co-team text-center animate-box">
                <figure>
                  <img src="/assets/images/person_2.jpg" alt="Co-Founder" />
                </figure>

                <div>
                  <h3>John Doe</h3>
                  <p><span>Co-Founder</span></p>
                  <p>Far far away, there live the blind texts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
