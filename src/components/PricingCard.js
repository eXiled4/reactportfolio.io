import React from 'react'
import { Link } from 'react-router-dom'
import "./PricingCard.css"

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h2>- Freemium -</h2>
                <span className='bar'></span>
                    <p className='aud'>$100</p>
                    <p>- 3 days -</p>
                    <p>- 3 hours -</p>
                    <p>- 3 minutes -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className='btn'>Purchase Now!</Link>
            </div>

            <div className='card'>
                <h2>- Premium -</h2>
                <span className='bar'></span>
                    <p className='aud'>$1000</p>
                    <p>- 3 weeks -</p>
                    <p>- 3 days -</p>
                    <p>- 3 hours -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className='btn'>Purchase Now!</Link>
            </div>

            <div className='card'>
                <h2>- Preferium -</h2>
                <span className='bar'></span>
                    <p className='aud'>$10000</p>
                    <p>- 3 years -</p>
                    <p>- 3 months -</p>
                    <p>- 3 fortnights -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className='btn'>Purchase Now!</Link>
            </div>

        </div>
    </div>
  )
}

export default PricingCard