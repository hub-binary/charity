// "use client"

import './globals.css'
import { Roboto } from 'next/font/google'
import {Navbar} from 'src/components'


const inter = Roboto({ 
  subsets: ['latin'],
  weight: '500'
})


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title> Little Hearts Foundation for Children </title>
        {/* Animate.css */}
        <link rel="stylesheet" href="/assets/css/animate.css" />
        {/* Icomoon Icon Fonts*/}
        <link rel="stylesheet" href="/assets/css/icomoon.css" />
        {/* Bootstrap  */}
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        {/* Superfish */}
        <link rel="stylesheet" href="/assets/css/superfish.css" />

        <link rel="stylesheet" href="/assets/css/style.css" />


        {/* Modernizr JS */}
        <script src="/assets/js/modernizr-2.6.2.min.js"></script>
      </head>


      <body className={inter.className}>
        <div id="fh5co-wrapper">
          <div id="fh5co-page">

            {/* Navbar */}
              <nav id="offcanvas-menu" role="navigation" style={{height: "664px"}}>
                <ul class="" id="" style={{touchAction: "pan-y"}}>
                  <li class="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#" class="fh5co-sub-ddown sf-with-ul">Get Involved</a>
                    <ul class="fh5co-sub-menu" style={{display: "none"}}>
                      <li><a href="#">Donate</a></li>
                      <li><a href="#">Fundraise</a></li>
                      <li><a href="#">Campaign</a></li>
                      <li><a href="#">Philantrophy</a></li>
                      <li><a href="#">Volunteer</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" class="fh5co-sub-ddown sf-with-ul">Projects</a>
                     <ul class="fh5co-sub-menu" style={{display: "none"}}>
                      <li><a href="#">Water World</a></li>
                      <li><a href="#">Cloth Giving</a></li>
                      <li><a href="#">Medical Mission</a></li>
                    </ul>
                  </li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            {/* Navbar */}

            <Navbar />        
          
            <div>
              {children}
            </div>


            {/* Footer */}
            <footer>
              <div id="footer">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6 col-md-offset-3 text-center">
                      <p class="fh5co-social-icons">
                        <a href="#"><i class="icon-twitter2"></i></a>
                        <a href="#"><i class="icon-facebook2"></i></a>
                        <a href="#"><i class="icon-instagram"></i></a>
                        <a href="#"><i class="icon-dribbble2"></i></a>
                        <a href="#"><i class="icon-youtube"></i></a>
                      </p>
                      <p>&copy; Copyright 2023 <a href="/">Little Hearts Foundation</a>. All Rights Reserved. </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>


        <script src="/assets/js/jquery.min.js"></script>
        {/* jQuery Easing */}
        <script src="/assets/js/jquery.easing.1.3.js"></script>
        {/* Bootstrap */}
        <script src="/assets/js/bootstrap.min.js"></script>
        {/* Waypoints */}
        <script src="/assets/js/jquery.waypoints.min.js"></script>
        <script src="/assets/js/sticky.js"></script>

        {/* Stellar */}
        <script src="/assets/js/jquery.stellar.min.js"></script>
        {/* Superfish */}
        <script src="/assets/js/hoverIntent.js"></script>
        <script src="/assets/js/superfish.js"></script>
        
        {/* Main JS */}
        <script src="/assets/js/main.js"></script>
      </body>
    </html>
  )
}
