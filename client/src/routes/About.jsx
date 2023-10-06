import { Text, Button, Spacer } from '@nextui-org/react'
import React, { memo } from 'react'

import {WLHeaderV2, WLTextV2} from "../libraries/Web-Legos/components/Text"

import "../assets/style/about.css";
import woman from "../assets/images/nicole.jpg"


export default function About() {
  
  const memo = "At times, life can be very challenging and difficult. Happiness, peace of mind and intimacy may be what you want but seem impossible to achieve. I offer psychotherapy to provide a path for you to discover what you are looking for. I am committed to working with you to help you understand why you feel the way you do and what you can do to feel better. As a holistic psychotherapist, my goal is to understand you as a whole person - mind, body and spirit. I provide a supportive and transformational therapeutic experience where you can learn to feel more joy and connection with yourself and others. I will help you heal from emotional, physical, and spiritual pain so that you may experience a more fulfilling and meaningful life. If you are looking for extra support and guidance through a challenging situation or want to improve your overall quality of life, I look forward to working with you to achieve your goals."
  
  return (
    <section id="about" className="about-container">
      <div className="container py-4 d-block w-100 d-md-none">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <Text h1 color="white" size="$5xl">My Goal:</Text>
            <Text color="#8C8C8C">
              {memo}
            </Text>
          </div>
          <div className="col-12 d-flex flex-column align-items-center">
            <img src={woman} alt="nicole" className="headshot" />
          </div>
        </div>
      </div>
      <div className="py-4 d-none w-100 flex-row d-md-flex align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-center px-5" style={{maxWidth: 1200}}>
          <div className="d-none d-lg-block">
            <WLHeaderV2 color="white" size="$5xl">My Goal:</WLHeaderV2>
          </div>
          <div className="d-block d-lg-none w-100">
            <WLHeaderV2 color="white" size="$5xl">My Goal:</WLHeaderV2>
          </div>
          <WLTextV2 indent color="#8C8C8C" align="start">
            {memo}
          </WLTextV2>
        </div>
        <div className="d-flex flex-column px-5 align-items-center">
          <img src={woman} alt="nicole" className="headshot" />
        </div>
      </div>
    </section>
  )
}
