import { Text, Button, Spacer } from '@nextui-org/react'
import React from 'react'

import {WLHeaderV2, WLTextV2} from "../libraries/Web-Legos/components/Text"

import "../assets/style/psychotherapy.css";
import wave from "../assets/images/grayWaveTop.svg"
import chair from "../assets/images/chair.png"
import brain from "../assets/images/brain.svg"
import meditation from "../assets/images/meditation.svg"
import heart from "../assets/images/heart.svg"
import waveWhite from "../assets/images/whiteWaveTop.svg"

import cert from "../assets/images/cert.svg"

const paragraph1 = "Nicole graduated in 1997 with a Masters in Social Work from the University of Pennsylvania. Since that time, she has been working as a psychotherapist helping people with a variety of issues including anxiety and depression."
const paragraph2 = "With over 20 years of experience, she provides compassionate support and practical feedback to help clients effectively address personal life challenges. With compassion and understanding, she works with each individual to help them build on their strengths and attain their goals."
const paragraph = `${paragraph1} ${paragraph2}`

export default function Psychotherapy() {
  
  const TextInline = () => (
    <div className="container d-lg-block d-none" style={{padding: 0}}>
      <div className="row d-flex flex-row align-items-center justify-content-center">
        <div className="col-12">
          <WLTextV2 color="#8C8C8C" align="left">
            {paragraph}
          </WLTextV2>
        </div>
        {/* <div className="col-6">
          <WLTextV2 color="#8C8C8C" align="left">
            {paragraph2}
          </WLTextV2>
        </div> */}
      </div>
    </div>
  )

  const TextVertical = () => (
    <div className="d-flex d-lg-none flex-column align-items-center justify-content-center"s>
      <WLTextV2 color="#8C8C8C" indent align="left">
        {paragraph}
      </WLTextV2>
      {/* <WLTextV2 color="#8C8C8C" align="left">
        {paragraph2}
      </WLTextV2> */}
    </div>
  )

  const HeaderInline =() => [
    <WLHeaderV2 className="psychotherapy-header d-none d-lg-block" b align="left" size="$3xl">Psychotherapy</WLHeaderV2>
    // <WLHeaderV2 className="psychotherapy-header d-none d-lg-block" h2 align="left" color="#5F5A67" size="$lg">Psychotherapy psychotherapy psychotherapy</WLHeaderV2>
  ]

  const HeaderVertical = () => [
    <WLHeaderV2 className="psychotherapy-header d-lg-none" b size="$3xl">Psychotherapy</WLHeaderV2>
    // <WLHeaderV2 className="psychotherapy-header d-lg-none " h2 color="#5F5A67" size="$lg">Psychotherapy psychotherapy psychotherapy</WLHeaderV2>
  ]

  const WhiteSection = () => (
    <div className="row w-100 card-top p-2">
      <div className="col-12 col-lg-8 d-flex flex-column align-items-start justify-content-center py-2">
        <hgroup className="w-100 d-flex flex-column align-items-center align-items-md-start">
          <HeaderInline />
          <HeaderVertical />
        </hgroup>
        <TextInline />
        <TextVertical />
      </div>
      <div className="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center">
        <img src={chair} alt="chair" className="chair" />
      </div>
    </div>
  )

  const GraySection = () => (
    <div className="row w-100 card-bottom px-2" >
      <div className="col-12 col-lg-6 py-3 d-flex flex-column align-items-center justify-content-center" style={{padding: 0}}>
        <div className="line-right px-4 d-flex flex-column align-items-center h-100">
          <img src={cert} alt="cert" className="card-glyph" />
          <Text b color="#E6E6E6">
            PA Licensed Clinical Social Worker
          </Text>
          <WLTextV2 color="#E6E6E6">
            Nicole is a PA Licensed Clinical Social Worker, bringing a wealth of expertise and dedication to her practice. Her licensure stands as a testament to her commitment to professional excellence and compassionate care.
          </WLTextV2>
        </div>
      </div>
      <div className="col-12 col-lg-6 py-3 d-flex flex-column align-items-center justify-content-center" style={{padding: 0}}>
        <div className="px-4 d-flex flex-column align-items-center h-100">
          <img src={cert} alt="cert" className="card-glyph" />
          <Text b color="#E6E6E6">
            Certified Gestalt Therapist
          </Text>
          <WLTextV2 color="#E6E6E6">
            Nicole is a Certified Gestalt Therapist, blending deep understanding and skill to facilitate meaningful personal growth in her clients.
          </WLTextV2>
        </div>
      </div>
    </div>
  )

  return (
    <section id="psychotherapy" className="psychotherapy-container px-2 px-sm-5">
      <img src={wave} alt="wave" className='w-100 shadow-bottom' style={{transform: "scaleX(-1) scaleY(-1)", position: "absolute", top: -1, left: 0, width: "100vw"}}/>
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center psychotherapy-card-container">
        <WhiteSection />
        <GraySection />
      </div>
      <img src={waveWhite} alt="wave-white" className='w-100 shadow-top' style={{position: "absolute", bottom: -1, left: 0, width: "100vw"}}/>
    </section>
  )
}
