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
      <div className="container d-flex flex-column align-items-center justify-content-center yoga-cards-container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 pb-5 d-flex flex-column align-items-center justify-content-center">
            <img src={studio1} alt="studio-1" className="studio-pic" />
            <div className="yoga-info p-2 d-flex flex-column align-items-center justify-content-center">
              <WLTextV2 color="white" size="$lg">Serene Soul Studios</WLTextV2>
              <Divider style={{background: "white"}} className="w-100"/>
              <WLTextV2 size="$lg" color="#8C8C8C">15 Commerce Ave, Boston MA</WLTextV2>
              <WLTextV2 size="$lg" color="#8C8C8C">Tuesdays & Thursdays @ 6 PM</WLTextV2>
            </div>
          </div>
          <div className="col-lg-2 d-none d-lg-inline">
          </div>
          <div className="col-12 col-md-6 col-lg-5 pb-5 d-flex flex-column align-items-center justify-content-center">
            <img src={studio2} alt="studio-1" className="studio-pic" />
            <div className="yoga-info p-2 d-flex flex-column align-items-center justify-content-center">
              <WLTextV2 color="white" size="$lg">Zen Zenith Studios</WLTextV2>
              <Divider style={{background: "white"}} className="w-100"/>
              <WLTextV2 size="$lg" color="#8C8C8C">123 Made-up Lane, Lancaster PA</WLTextV2>
              <WLTextV2 size="$lg" color="#8C8C8C">Weekends @ 10 AM</WLTextV2>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2">
        <div className="white-box p-2">
          <WLTextV2 color="#1E1E1E" size="$lg">
            I run a diverse array of classes, catering to beginners and seasoned practitioners alike. From Hatha to Vinyasa, each session is thoughtfully curated to meet the diverse needs of our community. To find out more about my class schedules at both Serene Soul and Zen Zenith Studios, please check out their websites by clicking one of the boxes above.
          </WLTextV2>
        </div>
      </div>
      <img src={waveWhiteTop} alt="wave-white" className='w-100 shadow-top' style={{position: "absolute", bottom: -1, left: 0, width: "100vw"}}/>
    </section>
  )
}
