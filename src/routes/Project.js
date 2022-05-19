import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ChildImg from '../components/ChildImg'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <ChildImg heading="PROJECTS." text="That I have been working on..."/>
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project