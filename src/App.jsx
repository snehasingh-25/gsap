import React from 'react'
import gsap from "gsap"
import Navbar from "./components/Navbar"
import {ScrollTrigger,SplitText} from "gsap/all"
import Hero from './components/Hero'
gsap.registerPlugin(ScrollTrigger,SplitText)
const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
    </main>
  )
}

export default App
