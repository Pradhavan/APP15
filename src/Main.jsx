import React from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Menubar from './components/MenuBar/Menubar'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './pages/AboutPage/AboutUs'
import Faq from './pages/FAQ/Faq'
import HomePage from './pages/HomePage/HomePage'
import JourneyPage from './pages/JourneyPage/JourneyPage'
import OfferingsPage from './pages/OfferingsPage/OfferingsPage'
import Partner from './pages/Partners/Partner'
import UniJourney from './pages/UniJourney/UniJourney'
import Values from './pages/Values/Values'
import WhyChooseus from './pages/WhyChooseUs/WhyChooseus'

const Main = () => {
  return (
    <div className='appContainer' >
      <Navbar/>
      <Menubar/>
      <HomePage/>
      <AboutUs/>
      <Values/>
      <JourneyPage/>
      <UniJourney/>
      <OfferingsPage/>
      <WhyChooseus/>
      <Faq/>
      <Partner/>
      <Footer/>

    </div>
  )
}

export default Main
