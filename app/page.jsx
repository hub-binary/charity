'use client'


import {HeroSection, GivingSection, PhilantrophySection, ProjectSection, GallerySection, HappySection} from 'src/components'
import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      
      <HappySection />

      <GivingSection />
      
      <GallerySection />
      
      <PhilantrophySection />

      <ProjectSection />

    </div>
  )
}
