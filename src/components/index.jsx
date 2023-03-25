"use client"

import {useRouter} from 'next/navigation'
import Link from 'next/link'


export const Navbar = ({ }) => {
	const router = useRouter();

  console.log("router:", router)

	return(
		<header id="fh5co-header-section" class="sticky-banner">
      <div class="container">
        <div class="nav-header">
          <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
          <h1 id="fh5co-logo"><a href="index.html">Little Hearts </a></h1>
          {/* START #fh5co-menu-wrap */}
          <nav id="fh5co-menu-wrap" role="navigation">
            <ul class="sf-menu" id="fh5co-primary-menu">
                <li>
                  <Link href="/"> Home </Link>
                </li>

              
              <li>
                <Link href="/">Get Involved</Link>
                <ul class="fh5co-sub-menu">
                  <li><Link href="/donate">Donate</Link></li>
                  <li><Link href="/volunteer">Volunteer</Link></li>
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
              
              <li><Link href="/blog">Blog</Link></li>
              
              <li><Link href="/contact">Contact</Link></li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
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
          <h2><strong> Help </strong> <strong> Poor Children </strong> </h2>


          <span class="mt-3"><a class="btn btn-primary btn-lg" href="#">Donate Now</a></span>
        </div>
      </div>
    </div>
  )
}


