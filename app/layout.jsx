"use client"

import './globals.css'
import {createContext} from 'react';
import { Roboto } from 'next/font/google'
import {Navbar, Sidebar} from 'src/components'

const inter = Roboto({ 
  subsets: ['latin'],
  weight: '500'
})


export const GlobalStore = createContext();

export default function RootLayout({ children }) {
  function toggleNav(){
    let menu = document.querySelector('#offcanvas-menu');
    menu.classList.toggle('open');
  }

  const context = {
    toggleNav,
  }

  return (
    <GlobalStore.Provider value={context}>
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

            {/* Sidebar */}
            <Sidebar />
              
            {/* Navbar */}
            <Navbar toggleNav={toggleNav} />        
          
            <div>
              {children}
            </div>


            {/* Footer */}
            <footer>
              <div id="footer">
                <div class="container">
                  <div class="">
                    <h2 className="text-white"> Little Hearts Foundation </h2>
                  </div>


                  <p>&copy; Copyright 2023 <a href="/">Little Hearts Foundation</a>. All Rights Reserved. </p>
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
    </GlobalStore.Provider>
  )
}
