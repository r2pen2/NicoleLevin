import { Text, Button, Spacer } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

import {WLHeaderV2, WLTextV2} from "../libraries/Web-Legos/components/Text"
import {WaveTop} from "../libraries/Web-Legos/components/Waves"

import "../assets/style/psychotherapy.css";
import wave from "../assets/images/grayWaveTop.svg"
import chair from "../assets/images/chair.png"
import brain from "../assets/images/brain.svg"
import meditation from "../assets/images/meditation.svg"
import heart from "../assets/images/heart.svg"
import waveWhite from "../assets/images/whiteWaveTop.svg"

import cert from "../assets/images/cert.svg"
import { TreatmentItem } from '../api/siteModels.ts';

const paragraph1 = "Nicole graduated in 1997 with a Masters in Social Work from the University of Pennsylvania. Since that time, she has been working as a psychotherapist helping people with a variety of issues including anxiety and depression."
const paragraph2 = "With over 20 years of experience, she provides compassionate support and practical feedback to help clients effectively address personal life challenges. With compassion and understanding, she works with each individual to help them build on their strengths and attain their goals."
const paragraph = `${paragraph1} ${paragraph2}`

export default function Psychotherapy() {

  const [treatments, setTreatments] = useState([])

  useEffect(() => {
    setTreatments([TreatmentItem.examples().anxiety, TreatmentItem.examples().depression, TreatmentItem.examples().trauma, TreatmentItem.examples().grief, TreatmentItem.examples().relationships, TreatmentItem.examples().stress, TreatmentItem.examples().chronic, TreatmentItem.examples().work, TreatmentItem.examples().transitions])
  }, [])
  
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
    <WLHeaderV2 className="psychotherapy-header d-none d-lg-block" b align="left" >Psychotherapy</WLHeaderV2>
    // <WLHeaderV2 className="psychotherapy-header d-none d-lg-block" h2 align="left" color="#5F5A67" size="$lg">Psychotherapy psychotherapy psychotherapy</WLHeaderV2>
  ]

  const HeaderVertical = () => [
    <WLHeaderV2 className="psychotherapy-header d-lg-none" b >Psychotherapy</WLHeaderV2>
    // <WLHeaderV2 className="psychotherapy-header d-lg-none " h2 color="#5F5A67" size="$lg">Psychotherapy psychotherapy psychotherapy</WLHeaderV2>
  ]

  const Treatment = ({t}) => (
    <div className="col-12 col-md-6 col-lg-4 treatment">
      <Text>{t.title}</Text>
    </div>
  )

  const WhiteSection = () => (
    <section id="psychotherapy" className="row w-100 card-top p-2">
      <div className="col-12 col-lg-8 d-flex flex-column align-items-start justify-content-start py-2">
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
      <WLHeaderV2 h2 className="treatments-header">Treatment Specializations</WLHeaderV2>
      <div className="container">
        <ul className="row">
          {treatments.map((t, i) => <Treatment key={i} t={t}/>)}
        </ul>
      </div>
    </section>
  )

  const GraySection = () => (
    <div className="row w-100 card-bottom px-2" >
      <div className="col-12 col-lg-6 py-3 d-flex flex-column align-items-center justify-content-center" style={{padding: 0}}>
        <div className="line-right px-4 d-flex flex-column align-items-center h-100 gap-2">
          <Text b color="#E6E6E6">
            PA Licensed Clinical Social Worker
          </Text>
          <WLTextV2 color="#E6E6E6">
            Nicole is a PA Licensed Clinical Social Worker, bringing a wealth of expertise and dedication to her practice. Her licensure stands as a testament to her commitment to professional excellence and compassionate care.
          </WLTextV2>
        </div>
      </div>
      <div className="col-12 col-lg-6 py-3 d-flex flex-column align-items-center justify-content-center" style={{padding: 0}}>
        <div className="px-4 d-flex flex-column align-items-center h-100 gap-2">
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

  const WhiteWave = () => (
    <div className='w-100 shadow-top' style={{position: "absolute", bottom: -1, left: 0, width: "100vw"}}>
      <svg width="100vw" height="95" viewBox="0 0 100vw 95" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_2_260)">
        <path d="M-2 65L32.7764 60.3C67.6542 55.7 137.207 46.3 206.658 48.5C276.11 50.7 345.46 64.3 414.911 64C484.362 63.7 553.915 49.3 623.569 39.2C693.224 29 762.776 23 832.431 31.2C902.085 39.3 971.638 61.7 1041.09 64.3C1110.54 67 1179.89 50 1249.34 37.3C1318.79 24.7 1388.35 16.3 1423.22 12.2L1458 8V95H1423.22C1388.35 95 1318.79 95 1249.34 95C1179.89 95 1110.54 95 1041.09 95C971.638 95 902.085 95 832.431 95C762.776 95 693.224 95 623.569 95C553.915 95 484.362 95 414.911 95C345.46 95 276.11 95 206.658 95C137.207 95 67.6542 95 32.7764 95H-2V65Z" fill="white"/>
        </g>
        <defs>
        <filter id="filter0_d_2_260" x="-6" y="0" width="1468" height="95" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_260"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_260" result="shape"/>
        </filter>
        </defs>
      </svg>
    </div>
  )

  const GrayWave = () => (
    <div className='w-100 shadow-bottom' style={{transform: "scaleX(-1) scaleY(-1)", position: "absolute", top: -1, left: 0, width: "100vw"}}>
      <svg width="100vw" height="104" viewBox="0 0 100vw 104" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_3_60)">
        <path d="M0 89.3088L80.8889 91.8052C161.778 94.3015 323.556 99.2941 485.333 96.3699C647.111 93.4812 808.889 82.6401 970.667 66.5923C1132.44 50.5445 1294.22 29.2901 1375.11 18.6272L1456 8V105H1375.11C1294.22 105 1132.44 105 970.667 105C808.889 105 647.111 105 485.333 105C323.556 105 161.778 105 80.8889 105H0V89.3088Z" fill="#1E1E1E"/>
        </g>
        <defs>
        <filter id="filter0_d_3_60" x="-4" y="0" width="1464" height="105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_60"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_60" result="shape"/>
        </filter>
        </defs>
      </svg>
    </div>
  )

  return (
    <section  className="psychotherapy-container px-2 px-sm-5">
      <GrayWave />
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center psychotherapy-card-container">
        <WhiteSection />
        <GraySection />
      </div>
      <WhiteWave />
    </section>
  )
}
