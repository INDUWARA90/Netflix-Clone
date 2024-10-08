import React from 'react'
import './home.css'
import NavigationBar from '../../Navigation Bar/NavigationBar'
import heroBanner from '../../../assets/hero_banner.jpg'
import herotitle from '../../../assets/hero_title.png'

import PlayIcon from '../../../assets/play_icon.png'
import InfoIcon from '../../../assets/info_icon.png'
import TitleCard from '../../Title Card/TitleCard'
import Footer from '../../Footer/Footer'



function Home() {
  return (
    <>
      
      {/*=====Navigation=====*/}
      
      <NavigationBar />

      {/*=====Home Page Image=====*/}
      <div className="container-images">
        <div className="hero-image">
          <img src={heroBanner} alt="" />
        </div>
        <div className="title-image">
          <img src={herotitle} alt="" />
          <p className='About-hero-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia voluptates vero adipisci voluptatibus! Doloremque, soluta autem ullam officiis, voluptas nulla deleniti cumque dolor cum veniam eius, consectetur voluptatum sequi impedit.</p>
          <div className="container-btn">
            <button className='btn'><img src={PlayIcon} alt="" /><span>Play</span></button>
            <button className='btn dark-btn'><img src={InfoIcon} alt="" /><span>More Info</span></button>
          </div>
          <TitleCard name='Popular on Netflix' />
        </div>
      </div>
      
      {/*=====Title Cards=====*/}
      <div className="container-title-cards">

        <TitleCard  name='Blockbuster Movies' type='popular' />
        <TitleCard  name='Only on Netflix' type='now_playing' />
        <TitleCard  name='upcomming'  type='upcoming'/>
        <TitleCard  name='Top Pics for you' type='top_rated' />
        
      </div>
      
      {/*=====Footer=====*/}
      <Footer />

    </>
  )
}

export default Home