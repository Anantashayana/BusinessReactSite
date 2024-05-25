import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './Component/Home';
import Features from './Component/Features';
import Pricing from './Component/Pricing';
import About from './Component/About';
import Contact from './Component/Contact';
import Error from './Component/Error';
import List from './Component/List'
import Footer from './Component/Footer'

const App=() => {
  return (
    <>
    <List />
    <Routes>
      <Route exact path='/' element={<Home/>}> </Route>
      <Route path='/Features' element={<Features/>}> </Route>
      <Route path='/Pricing' element={<Pricing/>}> </Route>
      <Route path='/About' element={<About/>}> </Route>
      <Route path='/Contact' element={<Contact/>}> </Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App;