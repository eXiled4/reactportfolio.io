import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ChildImg from '../components/ChildImg'
import PricingCard from '../components/PricingCard'
import WorkCard from '../components/WorkCard'

const Project = () => {
  return (
    <div>
      <Navbar />
      <ChildImg heading="PROJECTS." text="That I have been working on..."/>
      <WorkCard />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project