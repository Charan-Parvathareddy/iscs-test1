import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Hover() {
  return (
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div data-src="images/ml.png" />
    <div data-src="images/ml1.png" />
    <div data-src="images/stranger-things-5.jpg" />
 
  </AutoplaySlider>
  
  )
}
