import { Text, Button, Spacer, Divider } from '@nextui-org/react'
import React from 'react'

import {WLHeaderV2, WLTextV2} from "../libraries/Web-Legos/components/Text"

import "../assets/style/yoga.css";
import wave from "../assets/images/grayWaveTop.svg"
import chair from "../assets/images/chair.png"
import brain from "../assets/images/brain.svg"
import meditation from "../assets/images/meditation.svg"
import heart from "../assets/images/heart.svg"
import waveWhiteBottom from "../assets/images/whiteWaveBottom.svg"
import waveWhiteTop from "../assets/images/whiteWaveTop.svg"

import studio1 from '../assets/images/studio1.png'
import studio2 from '../assets/images/studio2.png'

export default function Yoga() {
  
  const TextInline = () => (
    <div className="container d-md-block d-none" style={{padding: 0}}>
      <div className="row d-flex flex-row align-items-center justify-content-center">
        <div className="col-6">
          <WLTextV2 color="#8C8C8C" align="left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione aliquam molestias nostrum ea odio maxime, perferendis expedita quam ad soluta assumenda! Officiis blanditiis expedita voluptatum earum quas cum at.
          </WLTextV2>
        </div>
        <div className="col-6">
          <WLTextV2 color="#8C8C8C" align="left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione aliquam molestias nostrum ea odio maxime, perferendis expedita quam ad soluta assumenda! Officiis blanditiis expedita voluptatum earum quas cum at.
          </WLTextV2>
        </div>
      </div>
    </div>
  )

  const TextVertical = () => (
    <div className="d-flex d-md-none flex-column align-items-center justify-content-center"s>
      <WLTextV2 color="#8C8C8C" align="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione aliquam molestias nostrum ea odio maxime, perferendis expedita quam ad soluta assumenda! Officiis blanditiis expedita voluptatum earum quas cum at.
      </WLTextV2>
      <WLTextV2 color="#8C8C8C" align="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione aliquam molestias nostrum ea odio maxime, perferendis expedita quam ad soluta assumenda! Officiis blanditiis expedita voluptatum earum quas cum at.
      </WLTextV2>
    </div>
  )

  return (
    <section id="yoga-and-pilates" className="yoga-studios-container px-2 px-sm-5">
      <img src={waveWhiteBottom} alt="wave" className='w-100 shadow-bottom' style={{position: "absolute", top: -1, left: 0, width: "100vw"}}/>
      {/* <div className="px-2">
        <div className="white-box p-2">
          <WLTextV2 color="#1E1E1E" size="$lg">
            Somewhere here will be education and certifications. We can put your services with the psychotherapy overview, which I will need to be larger.
          </WLTextV2>
        </div>
      </div> */}
      <img src={waveWhiteTop} alt="wave-white" className='w-100 shadow-top' style={{position: "absolute", bottom: -1, left: 0, width: "100vw"}}/>
    </section>
  )
}
