'use client'
import {HeroSection, ProjectSection, PhilantrophySection} from 'src/components'
import Image from 'next/image'
// import styles from './page.module.css'


export default function Home() {
  return (
    <div className="">
      <HeroSection />

      <ProjectSection />

      <PhilantrophySection />
    </div>
  )
}
