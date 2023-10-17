import React, { useEffect, useState } from 'react'

import "../assets/style/workshops.css"
import { QuoteBlock, WLHeaderV2, WLTextV2 } from '../libraries/Web-Legos/components/Text'
import { Spacer } from '@nextui-org/react'

import wave from "../assets/images/grayWaveTop.svg"

export default function Workshops() {
  return (
    <section id="workshops" className="w-100 workshops-container d-flex flex-column align-items-center justify-content-center pt-5" >
      <div className="w-100 px-4 px-md-5">
        <WLHeaderV2>Services</WLHeaderV2>
        <WLTextV2 color="#5F5A67">
          Nicole offers a diverse range of therapeutic services tailored to individual needs. Her expertise spans individual psychotherapy employing traditional talk therapy techniques, to more holistic approaches like yoga therapy which seamlessly integrates talk therapy with yoga and breathwork. In addition, Nicole specializes in both private sessions and group classes for yoga, pilates, and holistic movement. She also conducts immersive workshops, combining the benefits of yoga, breath, and chant, as well as unique Group Motion workshops. Each service is designed to support and guide individuals on their path to mental, emotional, and physical well-being.
        </WLTextV2>
        <Spacer y={2} />
      </div>
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
      <img src={wave} alt="wave" className='w-100 shadow-top' style={{transform: "scaleX(-1)", width: "100vw", position: "absolute", bottom: -1, left: 0}}/>
    </section>
  )
}
