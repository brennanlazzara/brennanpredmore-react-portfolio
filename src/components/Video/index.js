import React from 'react'
import './style.css'

export default function Video() {
    return (
        <div>
        <video autoPlay muted loop id="myVideo">
      <source src="./assets/earthVideo.mp4" type="video/mp4"/>
        </video>
        </div>
    )
}
