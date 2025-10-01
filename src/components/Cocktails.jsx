import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { useMediaQuery } from 'react-responsive'

const Cocktails = () => {
    useGSAP(() => {
	const parallaxTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#cocktails',
		start: 'top 30%',
		end: 'bottom 80%',
		scrub: true,
	 }
	})
	
	parallaxTimeline
	 .from('#c-left-leaf', {
		x: -100, y: 100
	})
	 .from('#c-right-leaf', {
		x: 100, y: 100
	})
 })
  return (
    <section id='cocktails'>
        <img src="/images/cocktail-left-leaf.png" alt="" id='c-left-leaf' />
        <img src="/images/cocktail-right-leaf.png" alt="" id='c-right-leaf'/>


        <div className='list'>
            <div className='popular'>
                <h2>Most popular Cocktails</h2>
                <ul>
                    {cocktailLists.map((cocktail)=>(
                        <li key={cocktail.name}>
                            <div className='md:me-28'>
                                <h3>{cocktail.name}</h3>
                                <p>{cocktail.country} | {cocktail.detail}</p>
                            </div>
                            <span>{cocktail.price}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='loved'>
                <h2>Most loved Mocktails</h2>
                     <ul>
                    {mockTailLists.map((mocktail)=>(
                        <li key={mocktail.name}>
                            <div className='md:me-28'>
                                <h3>{mocktail.name}</h3>
                                <p>{mocktail.country} | {mocktail.detail}</p>
                            </div>
                            <span>{mocktail.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Cocktails
