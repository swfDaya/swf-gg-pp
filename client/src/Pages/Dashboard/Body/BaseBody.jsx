import React from 'react'
import './BaseBody.css'
import { useNavigate } from "react-router-dom";

const BaseBody = () => {

  const navigate = useNavigate();

  return (
    <div
    className = 'base-body-root font-inter'
    >
        <div
        className = 'body-box-odd to-center'
        onClick={() => navigate("/oddday")}
        >
            <div>Monday</div>
            <div>Wednesday</div>
            <div>Friday</div>
        </div>
        <div></div>
        <div
        className = 'body-box-even to-center'
        >
            <div>Tuesday</div>
            <div>Thursday</div>
            <div>Saturday</div>
        </div>
    </div>
  )
}

export default BaseBody
