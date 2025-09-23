import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Work from './Components/Work/Work'
import Portofolio from './Components/Portofolio/Portofolio' 
import BookSection from './Components/Book-Section/Book-Section'
import QuestionsSection from './Components/Questions/Questions'
import ChooseMe from './Components/Choose-me-section/Choose-me-section'
import ClientsSection from './Components/Clients-Section/Clients-Section'
import Footer from './Components/Footer/Footer'


function App() {
 

  return (
    <>
    <Navbar/>
    <Hero/>
    <ClientsSection/>
    <About/>
   <Work />
   <ChooseMe/>
   <ClientsSection/>
   <Portofolio />
   <BookSection />
   <QuestionsSection />
   <Footer />
  
    </>
  )
}

export default App
