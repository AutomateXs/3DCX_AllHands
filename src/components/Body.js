import React from 'react'
import Team from './Team'
import Projects from './Projects'
import ImageSlider from './ImageSlider'
import Testimonials from './Testimonials'

const Body = props => {
  return (
    <div className='body-container'>
     <ImageSlider/>
      <Team/>
      <Projects />
   <Testimonials/>
    </div>
  )
}


export default Body