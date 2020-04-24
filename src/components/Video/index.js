import React from 'react'
import './video.css'

export default function Video() {
    return (
        <div>
        <video autoplay muted loop id="myVideo">
      <source src="./assets/earthVideo.mp4" type="video/mp4"/>
        </video>
        </div>
    )
}
