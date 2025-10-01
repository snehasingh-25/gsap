import React from 'react'
import gsap from "gsap"
import Navbar from "./components/Navbar"
import {ScrollTrigger,SplitText} from "gsap/all"
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import About from './components/About'
import Menu from './components/Menu'
import Art from './components/Art'
gsap.registerPlugin(ScrollTrigger,SplitText)
const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Cocktails></Cocktails>
      <Art></Art>
      <Menu></Menu>
    </main>
  )
}

export default App
