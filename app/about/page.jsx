// 'use-client'
import {HeroSection} from 'src/components'
import Image from 'next/image'
// import styles from './page.module.css'


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      
      <div id="fh5co-feature-product" class="fh5co-section-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center heading-section">
              <h3>How we started.</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>

          <div class="row row-bottom-padded-md">
            <div class="col-md-12 text-center animate-box">
              <p><img src="images/cover_bg_1.jpg" alt="Free HTML5 Bootstrap Template" class="img-responsive" /></p>
            </div>
            <div class="col-md-6 text-center animate-box">
              <p><img src="images/cover_bg_2.jpg" alt="Free HTML5 Bootstrap Template" class="img-responsive" /></p>
            </div>
            <div class="col-md-6 text-center animate-box">
              <p><img src="images/cover_bg_3.jpg" alt="Free HTML5 Bootstrap Template" class="img-responsive" /></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="feature-text">
                <h3>Love</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-text">
                <h3>Compassion</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-text">
                <h3>Charity</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>

      
      <div id="fh5co-portfolio">
        <div class="container">

          <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center heading-section animate-box">
              <h3>Our Gallery</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
            </div>
          </div>

          
          <div class="row row-bottom-padded-md">
            <div class="col-md-12">
              <ul id="fh5co-portfolio-list">

                <li class="two-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: "url('/assets/images/cover_bg_1.jpg')"}}>
                  <a href="#" class="color-3">
                    <div class="case-studies-summary">
                      <span>Give Love</span>
                      <h2>Donation is caring</h2>
                    </div>
                  </a>
                </li>
              
                <li class="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: "url('/assets/images/cover_bg_3.jpg')"}}>
                  <a href="#" class="color-4">
                    <div class="case-studies-summary">
                      <span>Give Love</span>
                      <h2>Donation is caring</h2>
                    </div>
                  </a>
                </li>

                <li class="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: "url('/assets/images/cover_bg_1.jpg')"}}>
                <a href="#" class="color-5">
                    <div class="case-studies-summary">
                      <span>Give Love</span>
                      <h2>Donation is caring</h2>
                    </div>
                  </a>
                </li>
                <li class="two-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: "url('/assets/images/cover_bg_3.jpg')"}}>
                  <a href="#" class="color-6">
                    <div class="case-studies-summary">
                      <span>Give Love</span>
                      <h2>Donation is caring</h2>
                    </div>
                  </a>
                </li>
              </ul>   
            </div>
          </div>

          <div class="row">
            <div class="col-md-4 col-md-offset-4 text-center animate-box">
              <a href="#" class="btn btn-primary btn-lg">See Gallery</a>
            </div>
          </div>

          
        </div>
      </div>
      

      
      <div id="fh5co-content-section" class="fh5co-section-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h3>Leadership</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="fh5co-team text-center animate-box">
                <figure>
                  <img src="images/person_1.jpg" alt="user" />
                </figure>

                <div>
                  <h3>Jean Doe</h3>
                  <p><span>Founder</span></p>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                
                <p class="fh5co-social-icons">
                  <a href="#"><i class="icon-twitter2"></i></a>
                  <a href="#"><i class="icon-linkedin2"></i></a>
                  <a href="#"><i class="icon-facebook3"></i></a>
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="fh5co-team text-center animate-box">
                <figure>
                  <img src="images/person_2.jpg" alt="user" />
                </figure>
                <div>
                  <h3>John Doe</h3>
                  <p><span>Founder</span></p>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <p class="fh5co-social-icons">
                  <a href="#"><i class="icon-twitter2"></i></a>
                  <a href="#"><i class="icon-linkedin2"></i></a>
                  <a href="#"><i class="icon-facebook3"></i></a>
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="fh5co-team text-center animate-box">
                <figure>
                  <img src="images/person_3.jpg" alt="user" />
                </figure>
                <div>
                  <h3>John Doe</h3>
                  <p><span>Founder</span></p>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <p class="fh5co-social-icons">
                  <a href="#"><i class="icon-twitter2"></i></a>
                  <a href="#"><i class="icon-linkedin2"></i></a>
                  <a href="#"><i class="icon-facebook3"></i></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}