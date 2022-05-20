import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ChildImg from '../components/ChildImg'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ChildImg heading="CONTACT." text="Let's get in touch..."/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact