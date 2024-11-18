import React from 'react'
import './Styles/Home.css'
import Headnavbar from '../Components/Headnavbar'
import About from './About'
import Services from './Services'
import Process from './Process'
import Satisfiedcustromer from './Satisfiedcustomer'
import Contact from './Contact'

import bg from './Images/BackgroundImagesPages/bgImage.jpg'
import PorfolioSection from './PorfolioSection'
const Home = () => {
    return (
        <div  style={{
            backgroundImage: `url(${bg})`,
            backgroundAttachment: 'fixed', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            backgroundColor: 'black', 
            // minHeight: '100vh',
            width: '100%',
            height: '100%'
        }}>
            <Headnavbar />
<section className='homeSection d-flex justify-content-center align-items-center'>
    <div className='col-lg-8 col-md-10 col-sm-12'>
    <h2 className='homeHead2 text-center'><span className='spanHead2'>Reliablity</span>,<span className='spanHead2'> Creativity</span>, <span className='spanHead2'>Dedication</span>.</h2>
    <p className='homePara text-center'>We are a creative team of designers, developers and strategic experts who aim
    to solve business problems with digital solutions.</p>
    </div>
</section>
<About />
<Services />
<Process />
<PorfolioSection />
<Satisfiedcustromer />
<Contact />
        </div>
    )
}

export default Home
