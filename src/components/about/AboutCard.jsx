import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

// AboutCard Component: Displays the "About" section of the webpage
const AboutCard = () => {
  return (
    <>
      {/* Main section for the About page */}
      <section className='aboutHome'>
        <div className='container flexSB'>
          
          {/* Left Column: Displays an image related to the About section */}
          <div className='left row'>
            <img src='./images/about.webp' alt='About us' />
          </div>

          {/* Right Column: Contains heading and dynamic content about the platform benefits */}
          <div className='right row'>
            {/* Heading component with a subtitle and title */}
            <Heading 
              subtitle='LEARN ANYTHING' 
              title='Benefits About Online Learning Expertise' 
            />
            
            {/* Items Section: Dynamically renders each benefit item from the homeAbout data */}
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  // Single Item with image and text (benefit title and description)
                  <div className='item flexSB' key={val.id}>
                    <div className='img'>
                      <img src={val.cover} alt={val.title} />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Awrapper component: Could be used to wrap or display additional information */}
      <Awrapper />
    </>
  )
}

export default AboutCard
