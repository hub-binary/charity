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
                  <img src="/assets/images/founder-1.jpg" alt="Co-Founder" />
                </figure>

                <div>
                  <h3>Kent Micheal</h3>
                  <p><span>Founder</span></p>
                  <p>Every day, we see the impact of our work in the smiles of children who have been given a chance to thrive. It's a humbling reminder of the power of community and the importance of giving back.</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="fh5co-team text-center animate-box">
                <figure>
                  <img src="/assets/images/phil-woman-3.jpg" alt="Co-Founder" />
                </figure>

                <div>
                  <h3>Abigail Lakewood</h3>
                  <p><span>Co-Founder</span></p>
                  <p>I am continually inspired by the generosity and compassion of our supporters. Whether you've donated your time, your money, or your resources, you have played a crucial role in helping us make a difference.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
