import React from 'react'
import Navbar from '../components/Navbar.js'
import { Slider } from '../components/Slider.js'
import { Categories } from '../components/Categories.js'
import { Products } from '../components/Products.js'
import { Newsletter } from '../components/Newsletter.js'
import { Footer } from '../components/Footer.js'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider />
        <Categories />
        <Products/>
        <Newsletter/>
        <Footer/>
        </div>
  )
}

export default Home;