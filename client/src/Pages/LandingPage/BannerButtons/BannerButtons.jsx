import React from 'react'
import './BannerButtons.css'
import { SignInButton } from '@clerk/clerk-react'

const BannerButtons = () => {
  return (
    <div 
    className = 'banner-buttons-root' >
        <div></div>
        <div
        className = 'banner-buttons-container'
        >
            <div className = 'banner-buttons-spacer-mobile' ></div>
            <SignInButton
            redirectUrl="/home"
            fallbackRedirectUrl="/home"
            >
              <div
              className = 'banner-buttons-signup to-center prevent-select'
              >
                  Start my Journey
              </div>
            </SignInButton>
            <div className = 'banner-buttons-spacer to-center' ></div>
            <SignInButton
            redirectUrl="/home"
            fallbackRedirectUrl="/home"
            >
              <div
              className = 'banner-buttons-signin to-center prevent-select'
              >
                  Sign-in to my account
              </div>
            </SignInButton>
        </div>
        <div></div>
    </div>
  )
}

export default BannerButtons