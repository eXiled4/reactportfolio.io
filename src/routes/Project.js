import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ChildImg from '../components/ChildImg'
import PricingCard from '../components/PricingCard'

const Project = () => {
  return (
    <div>
      <Navbar />
      <ChildImg heading="PROJECTS." text="That I have been working on..."/>
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project