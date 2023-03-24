// 'use-client'
// import {Button} from '@chakra-ui/next-js'
import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <div className="header">
      <div className={`header-text`}>
        <h1 className={"header-text-title"}> Helping Needy Children </h1>

        <p className="header-text-intro">
          Our heroes come from all walks of life, but they share a common goal: to create a brighter future for children around the world.
        </p>

        <p className="header-text-intro">
          There are many ways you can help us in our mission to support kids in need. Join our community of heroes today and make a difference in the life of a child.
        </p>

        <button> Join Our Mission </button>
      </div>

      {/*<div className="header-blob">
        <svg className="svg-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#24A148" d="M36.7,-51.6C47.6,-42.5,56.5,-31.9,60.4,-19.7C64.2,-7.5,62.9,6.3,61.1,22.3C59.3,38.3,56.9,56.7,46.6,69.3C36.3,81.9,18.2,88.8,2.8,85C-12.6,81.2,-25.2,66.6,-38.9,55.1C-52.5,43.6,-67.1,35.1,-74.1,22.1C-81.1,9.1,-80.5,-8.4,-74.3,-23.1C-68.1,-37.8,-56.3,-49.5,-43,-57.8C-29.7,-66.1,-14.9,-70.9,-1,-69.5C12.9,-68.1,25.8,-60.7,36.7,-51.6Z" transform="translate(100 100)" />
        </svg>
      </div>*/}
    </div>
  )
}
