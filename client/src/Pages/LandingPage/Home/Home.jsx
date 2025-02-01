import React from 'react'
import './Home.css'
import TitleBar from '../TitleBar/TitleBar'
import Box3 from '../Boxes/Box3'
import Box2 from '../Boxes/Box2'
import Box1 from '../Boxes/Box1'
import Box4 from '../Boxes/Box4'
import Box5 from '../Boxes/Box5'
import BannerText from '../BannerText/BannerText'
import BannerButtons from '../BannerButtons/BannerButtons'


const Home = () => {
  return (
    <div
    className = 'home-root'
    >
      <TitleBar/>
      <BannerText/>
      <BannerButtons/>
      <Box1/>
      <Box2/>
      <Box3/>
      <Box4/>
      <Box5/>
    </div>
  )
}

export default Home
