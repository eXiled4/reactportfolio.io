import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ChildImg from '../components/ChildImg'

const Project = () => {
  return (
    <div>
      <Navbar />
      <ChildImg heading="PROJECTS." text="That I have been working on..."/>
      <Footer />
    </div>
  )
}

export default Project