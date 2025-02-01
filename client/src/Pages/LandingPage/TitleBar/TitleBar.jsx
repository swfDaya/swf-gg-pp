import React from 'react'
import './TitleBar.css'
import hamMenu from './assets/hamMenu.svg'

const TitleBar = () => {

  const navBarMenus = ['Why GainsGauge', 'Features', 'Premium ⚜', 'About Us']

  return (
    <div
    className = 'title-bar-root'
    >
      {/* <div
      className = 'title-bar-logo to-center'
      >
        GG
      </div> */}
      <div></div>
      <div
      className = 'title-bar-name'
      >
        Gains Gauge
      </div>
      <div
      className = 'title-bar-menus'
      >
        {
          navBarMenus.map(
            (item, index) => {
              return(
                <div
                key = {item}
                className = 'title-bar-menu-each'
                >
                  <span>{item}</span>
                </div>
              )
            }
          )
        }
      </div>
      <div
      className = 'title-bar-free'
      >
        Try for free
      </div>
      <div
      className = 'title-bar-hamburger'
      >
        <img
        src = {hamMenu}
        />
      </div>
      <div></div>
    </div>
  )
}

export default TitleBar
