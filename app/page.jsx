'use client'


import {HeroSection, GivingSection, GallerySection, HappySection} from 'src/components'
import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      
      <HappySection />

      <GivingSection />
      
      <GallerySection />
      
      <div id="fh5co-content-section" class="fh5co-section-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h3>Our Philantrophist</h3>
              <p>Hear from people who believe in our work and have supported us, our Heros!</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="fh5co-testimonial text-center animate-box">
                <figure>
                  <img src="/assets/images/person_1.jpg" alt="user" />
                </figure>
                <blockquote>
                  <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
                </blockquote>
                <span>Jean Doe, XYZ Co.</span>
              </div>
            </div>
            <div class="col-md-4">
              <div class="fh5co-testimonial text-center animate-box">
                <figure>
                  <img src="/assets/images/person_2.jpg" alt="user" />
                </figure>
                <blockquote>
                  <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
                </blockquote>
                <span>John Doe, XYZ Co.</span>
              </div>
            </div>
            <div class="col-md-4">
              <div class="fh5co-testimonial text-center animate-box">
                <figure>
                  <img src="/assets/images/person_3.jpg" alt="user" />
                </figure>
                <blockquote>
                  <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
                </blockquote>
                <span>John Doe, XYZ Co.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* fh5co-content-section */}

      <div id="fh5co-services-section">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h3>Our Projects. Support Us</h3>
              <p>Help us provide housing, clean water, proper nutrition, health supplies, educational materials and more.</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row text-center">
            <div class="col-md-4 col-sm-4">
              <div class="services animate-box">
                <span><i class="icon-heart"></i></span>
                <h3>School in Ghana Volta Region</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="services animate-box">
                <span><i class="icon-heart"></i></span>
                <h3>Shelter Giving</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="services animate-box">
                <span><i class="icon-heart"></i></span>
                <h3>Play Toys Giving and Sport</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="services animate-box">
                <span><i class="icon-heart"></i></span>
                <h3>Water Project In Kenya</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="services animate-box">
                <span><i class="icon-heart"></i></span>
                <h3>Schooling for Children</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="services animate-box">
                <span><i class="icon-heart"></i></span>
                <h3>Medical Supplies</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
