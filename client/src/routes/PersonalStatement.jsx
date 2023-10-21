import React, { useEffect, useState } from 'react'

import "../assets/style/personalStatement.css"
import { QuoteBlock, WLHeaderV2, WLTextV2 } from '../libraries/Web-Legos/components/Text'
import { Spacer } from '@nextui-org/react'

import wave from "../assets/images/grayWaveTop.svg"

const GrayWave = () => (
  <div className='w-100 shadow-bottom' style={{position: "absolute", bottom: -1, left: 0, width: "100vw", transform:"scaleX(-1)"}}>
    <svg width="100vw" viewBox="0 0 1456 104" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export default function PersonalStatement() {
  return (
    <section id="personal-statement" className="w-100 workshops-container d-flex flex-column align-items-center justify-content-center pt-5" >
      <div className="workshops-content px-4 px-md-5">
        <QuoteBlock outlineColor="white" color="#281250">
          <WLHeaderV2>Personal Statement</WLHeaderV2>
          <WLTextV2 color="#5F5A67">
            At times, life can be very challenging and difficult.  Happiness, peace of mind and intimacy may be what you want but seem impossible to achieve.  I offer psychotherapy to provide a path for you to discover what you are looking for.  I am committed to working with you to help you understand why you feel the way you do and what you can do to feel better.  As a holistic psychotherapist, my goal is to understand you as whole person - mind, body and spirit.   I provide a supportive and transformational therapeutic experience where you can learn to feel more joy and connection with yourself and others.  I will help you heal from emotional, physical, and spiritual pain so that you may experience a more fulfilling and meaningful life.  If you are looking for extra support and guidance through a challenging situation or want to improve your overall quality of life, I look forward to working with you to achieve your goals.
          </WLTextV2>
        </QuoteBlock>
        <Spacer y={2} />
      </div>
      <Spacer y={2} />
      <GrayWave/>
    </section>
  )
}
