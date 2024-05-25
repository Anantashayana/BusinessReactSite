import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './routes/Home';
import Features from './routes/Features';
import Pricing from './routes/Pricing';
import About from './routes/About';
import Contact from './routes/Contact';
import Error from './routes/Error';
import List from './routes/List'
import Footer from './routes/Footer'

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