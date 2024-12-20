import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'; // bootstrap icons
import 'bootstrap/dist/css/bootstrap.css'; // bootstrap
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Services from '../Pages/Services'
import Portfolio from '../Pages/Portfolio'
// import Blogs from '../Pages/Blogs'
import Flectfooter from './Flectfooter';

import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
// import Headnavbar from './Headnavbar'
const App = () => {
  useEffect(() => {
    setTimeout(() => {
    AOS.init({ duration: 1000 }); // Duration of the animation in milliseconds
    console.log('i am rendered')
}, 500)
}, []);
  return (

    <div>
      <Router>
        {/* <Headnavbar /> */}
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/portfolio' element={<Portfolio />} />
            {/* <Route path='/blogs'element={<Blogs />} /> */}
            <Route path='/contact'element={<Contact />}/>
        </Routes>
        <Flectfooter />
        </Router> 
    </div>
  )
}

export default App
