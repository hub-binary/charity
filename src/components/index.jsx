"use client"

import {useRouter} from 'next/navigation'
import Link from 'next/link'


export const Navbar = ({ toggleNav }) => {
	const router = useRouter();

	return(
		<header style={{position: 'sticky !important', top: '0%'}} id="fh5co-header-section" class="sticky-banner">
      <div class="container">
        <div class="nav-header">
          <span onClick={toggleNav} class="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></span>

          <h1 id="fh5co-logo"><a href="index.html">Little Hearts </a></h1>
          {/* START #fh5co-menu-wrap */}

          <nav id="fh5co-menu-wrap" role="navigation">
            <ul class="sf-menu" id="fh5co-primary-menu">
                <li>
                  <Link href="/"> Home </Link>
                </li>              
              <li>
                <Link href="#">Get Involved</Link>
                <ul class="fh5co-sub-menu">
                  <li><Link href="/donate">Donate</Link></li>
                  <li><Link href="#">Volunteer</Link></li>
                </ul>
              </li>

              <li>
                <Link href="#" class="fh5co-sub-ddown">Projects</Link>
                 <ul class="fh5co-sub-menu">
                  <li><Link href="/causes/food-and-water">Food and Water Provision</Link></li>
                  <li><Link href="/causes/clothing">Clothing Giving</Link></li>
                  <li><Link href="/causes/medical">Housing and Medical Care</Link></li>
                  <li><Link href="/causes/toys">Toys Provision</Link></li>
                  <li><Link href="/causes/education">Education for Growth</Link></li>
                </ul>
              </li>
              
              <li><Link href="/about">About</Link></li>
              
              <li><Link href="/contact">Contact</Link></li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
	)
}


export const Sidebar = ({}) => {
  return(
    <nav id="offcanvas-menu" role="navigation" style={{height: "664px"}}>
      <ul class="" id="" style={{touchAction: "pan-y"}}>
        <li class="active">
          <Link href="/">Home</Link>
        </li>

        <li>
          <a href="#" class="fh5co-sub-ddown sf-with-ul">Get Involved</a>
          <ul class="fh5co-sub-menu" style={{display: "none"}}>
            <li><Link href="/donate">Donate</Link></li>
            <li><Link href="#">Volunteer</Link></li>
          </ul>
        </li>

        <li>
          <a href="#" class="fh5co-sub-ddown sf-with-ul">Projects</a>
           <ul class="fh5co-sub-menu" style={{display: "none"}}>
            <li><Link href="/causes/food-and-water">Food and Water Provision</Link></li>
            <li><Link href="/causes/clothing">Clothing Giving</Link></li>
            <li><Link href="/causes/medical">Housing and Medical Care</Link></li>
            <li><Link href="/causes/toys">Toys Provision</Link></li>
            <li><Link href="/causes/education">Education for Growth</Link></li>
          </ul>
        </li>

        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}


export const GivingSection = ({}) => {

  return (
    <div id="fh5co-feature-product" class="fh5co-section-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center heading-section">
              <h3>Giving is Virtue.</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>

          <div class="row row-bottom-padded-md">
            <div class="col-md-12 text-center animate-box">
              <p><img height="500px" src="/assets/images/one-african-child.jpg" alt="Feeding Children in School" class="img-responsive" /></p>
            </div>
            <div class="col-md-6 text-center animate-box">
              <p><img src="/assets/images/kids-smiling.jpg" alt="Smiling Children" class="img-responsive" /></p>
            </div>
            <div class="col-md-6 text-center animate-box">
              <p><img src="/assets/images/african-kids-in-school.jpg" alt="Children in School" class="img-responsive" /></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="feature-text">
                <h3>Love</h3>
                <p>Spread love to the world, your donations go far to provide basic amenities for underprivileged children.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-text">
                <h3>Compassion</h3>
                <p>Children shouldn't have to grow up without proper nutrition in incondusive environments. Let's help the cause and equality of life for all children.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-text">
                <h3>Charity</h3>
                <p>We can all help to give these children good food, clothes, education and a fun time. Give hope and a brither tomorrow.</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
  )
}


export const ProjectSection = ({ }) => {
  return(
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
  )
}


export const PhilantrophySection = ({ }) => {
  return(
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
  )
}


export const GallerySection = ({}) => {

  return (
    <div id="fh5co-portfolio">
        <div class="container">

          <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center heading-section animate-box">
              <h3>Our Gallery</h3>
              <p>See the impact of kind gestures in the lives of these children. These pictures say a lot about how basic amenities affect the quality of life for poor people.</p>
            </div>
          </div>

          
          <div class="row row-bottom-padded-md">
            <div class="col-md-12">
              <ul id="fh5co-portfolio-list">

                <li class="two-third animate-box"
                    data-animate-effect="fadeIn"
                    style={{backgroundImage: "url('/assets/images/kids-smiling.jpg')"}}>
                  <a class="color-3">
                    <div class="case-studies-summary">
                      <span>Give Love</span>
                      <h2>Donation is caring</h2>
                    </div>
                  </a>
                </li>
              
                <li class="one-third animate-box"
                    data-animate-effect="fadeIn"
                    style={{backgroundImage: "url('/assets/images/volunteers-smiling.jpg')"}}>
                  <a class="color-4">
                    <div class="case-studies-summary">
                      <span>Give Love</span>
                      <h2>Donation is caring</h2>
                    </div>
                  </a>
                </li>

                <li class="one-third animate-box"
                    data-animate-effect="fadeIn"
                    style={{backgroundImage: "url('/assets/images/feeding-african-kids-in-school.jpg')"}}>
                <a class="color-5">
                    <div class="case-studies-summary">
                      <span>Give Love</span>
                      <h2>Donation is caring</h2>
                    </div>
                  </a>
                </li>
                <li class="two-third animate-box"
                    data-animate-effect="fadeIn"
                    style={{backgroundImage: "url('/assets/images/one-african-child.jpg')"}}>
                  <a class="color-6">
                    <div class="case-studies-summary">
                      <span>Give Love</span>
                      <h2>Donation is caring</h2>
                    </div>
                  </a>
                </li>
              </ul>   
            </div>
          </div>          
        </div>
      </div>
  )
}


export const HeroSection = ({}) => {

  return (
    <div class="fh5co-hero">
      <div class="fh5co-overlay"></div>
      <div class="fh5co-cover text-center"
           data-stellar-background-ratio="0.5"
           style={{backgroundImage: 'url("/assets/images/one-african-child.jpg")'}}
      >
        <div class="desc animate-box">
          <h2><strong> Give Hope To Children</strong> </h2>

          <h5 class="text-white"
          style={{
            color: "#fff",
            fontWeight: '600',
            fontSize: "20px",
            maxWidth: "500px",
            margin: "2rem auto"
          }}>Help us give little children a better quality of life and a cleaner and fun environment for their growth and welbeing. </h5>
          <span class="mt-3"><Link href="/donate" class="btn btn-primary btn-lg"> Donate Now </Link></span>
        </div>
      </div>
    </div>
  )
}


export const HappySection = ({ }) => {
  return (
    <div id="fh5co-features">
        <div class="container">
          <div class="row">
            <div class="col-md-4">

              <div class="feature-left">
                <span class="icon">
                  <i class="icon-profile-male"></i>
                </span>
                <div class="feature-copy">
                  <h3>Become a volunteer</h3>
                  <p>Help us create a better future fo children all around the world.</p>
                  <p><a href="#">Learn More</a></p>
                </div>
              </div>

            </div>

            <div class="col-md-4">
              <div class="feature-left">
                <span class="icon">
                  <i class="icon-happy"></i>
                </span>
                <div class="feature-copy">
                  <h3>Happy Giving</h3>
                  <p>Give cheerfully and put that same cheerfull the smile on these children.</p>
                  <p><a href="/donate">Gift a toy.</a></p>
                </div>
              </div>

            </div>
            <div class="col-md-4">
              <div class="feature-left">
                <span class="icon">
                  <i class="icon-wallet"></i>
                </span>
                <div class="feature-copy">
                  <h3>Donation</h3>
                  <p>Your donations provide food, water, medical supplies and more.</p>
                  <p><a href="/donate">Make a Donation</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}


export const BlogSection = ({ }) => {
  return(
    <div id="fh5co-blog-section" class="fh5co-section-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h3>Recent From Blog</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row row-bottom-padded-md">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="fh5co-blog animate-box">
                <a href="#"><img class="img-responsive" src="/assets/images/cover_bg_1.jpg" alt="" /></a>
                <div class="blog-text">
                  <div class="prod-title">
                    <h3><a href="#">Medical Mission in Southern Kenya</a></h3>
                    <span class="posted_by">Sep. 15th</span>
                    <span class="comment"><a href="">21<i class="icon-bubble2"></i></a></span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p><a href="#">Learn More...</a></p>
                  </div>
                </div> 
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="fh5co-blog animate-box">
                <a href="#"><img class="img-responsive" src="/assets/images/cover_bg_2.jpg" alt="" /></a>
                <div class="blog-text">
                  <div class="prod-title">
                    <h3><a href="##">Medical Mission in Southern Kenya</a></h3>
                    <span class="posted_by">Sep. 15th</span>
                    <span class="comment"><a href="">21<i class="icon-bubble2"></i></a></span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p><a href="#">Learn More...</a></p>
                  </div>
                </div> 
              </div>
            </div>
            <div class="clearfix visible-sm-block"></div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="fh5co-blog animate-box">
                <a href="#"><img class="img-responsive" src="/assets/images/cover_bg_3.jpg" alt="" /></a>
                <div class="blog-text">
                  <div class="prod-title">
                    <h3><a href="#">Medical Mission in Southern Kenya</a></h3>
                    <span class="posted_by">Sep. 15th</span>
                    <span class="comment"><a href="">21<i class="icon-bubble2"></i></a></span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p><a href="#">Learn More...</a></p>
                  </div>
                </div> 
              </div>
            </div>
            <div class="clearfix visible-md-block"></div>
          </div>

          <div class="row">
            <div class="col-md-4 col-md-offset-4 text-center animate-box">
              <a href="#" class="btn btn-primary btn-lg">Our Blog</a>
            </div>
          </div>

        </div>
      </div>
  )
}