import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ChildImg from '../components/ChildImg'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <ChildImg 
      heading="ABOUT." 
      text="I am a newly graduate looking for a role as a
            junior developer in a fast-paced, user focused
            organisation with experience from health care."
      text1="Here I'd be able to learn from experienced
            developers and in turn make periodic,
            meaningful additions through my work."
      text2="I believe in continually contributing towards
            society, bettering myself & making a
            positive difference."
      />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About