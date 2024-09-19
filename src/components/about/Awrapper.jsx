import React from "react"
import { awrapper } from "../../dummydata"

// Awrapper Component: Renders a section displaying additional information boxes
const Awrapper = () => {
  return (
    <>
      {/* Wrapper section for displaying dynamic content in a grid layout */}
      <section className='awrapper'>
        <div className='container grid'>
          
          {/* Loop through awrapper data to dynamically create each box */}
          {awrapper.map((val, index) => {
            return (
              // Each box contains an image and related text
              <div className='box flex' key={index}>
                <div className='img'>
                  <img src={val.cover} alt={val.title} />
                </div>
                <div className='text'>
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Awrapper
