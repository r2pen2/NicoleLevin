import { Text, Button, Spacer } from '@nextui-org/react'
import React, { memo, useEffect, useState } from 'react'

import {WLHeader, WLHeaderV2, WLTextV2} from "../libraries/Web-Legos/components/Text"

import "../assets/style/about.css";
import nicole from "../assets/images/nicole.jpg"
import { EducationItem, MembershipItem, CertificationItem } from '../api/siteModels.ts';


export default function EducationAndCertifications() {

  return (
    <section id="about" className="about-container">
      <div className="container py-2">
        <div className="row d-flex flex-row align-items-center justify-content-center">
          <div className="col-xl-4 col-lg-12 col-12 d-flex flex-column justify-content-center align-items-center py-2">
            <img src={nicole} alt="education-glyph" style={{maxHeight: 200, width: 200, objectFit:"cover", borderRadius: "50%"}} />
          </div>
          <div className="col-xl-8 col-12 d-xl-flex d-none flex-column align-items-start justify-content-center">
            <WLHeaderV2 color="white" align="left">
              Nicole Levin
            </WLHeaderV2>
            <WLTextV2 align="left" color="white">
              Nicole offers a diverse range of therapeutic services tailored to individual needs. Her expertise spans individual psychotherapy employing traditional talk therapy techniques, to more holistic approaches like yoga therapy which seamlessly integrates talk therapy with yoga and breathwork. In addition, Nicole specializes in both private sessions and group classes for yoga, pilates, and holistic movement. She also conducts immersive workshops, combining the benefits of yoga, breath, and chant, as well as unique Group Motion workshops. Each service is designed to support and guide individuals on their path to mental, emotional, and physical well-being.
            </WLTextV2>
          </div>
          <div className="col-xl-8 col-12 d-none d-md-flex d-xl-none flex-column align-items-start justify-content-center">
            <WLHeaderV2 color="white">
              Nicole Levin
            </WLHeaderV2>
            <WLTextV2 align="left" color="white">
              Nicole offers a diverse range of therapeutic services tailored to individual needs. Her expertise spans individual psychotherapy employing traditional talk therapy techniques, to more holistic approaches like yoga therapy which seamlessly integrates talk therapy with yoga and breathwork. In addition, Nicole specializes in both private sessions and group classes for yoga, pilates, and holistic movement. She also conducts immersive workshops, combining the benefits of yoga, breath, and chant, as well as unique Group Motion workshops. Each service is designed to support and guide individuals on their path to mental, emotional, and physical well-being.
            </WLTextV2>
          </div>
          <div className="col-xl-8 col-12 d-flex d-md-none flex-column align-items-start justify-content-center">
            <WLHeaderV2 color="white">
              Nicole Levin
            </WLHeaderV2>
            <WLTextV2 color="white">
              Nicole offers a diverse range of therapeutic services tailored to individual needs. Her expertise spans individual psychotherapy employing traditional talk therapy techniques, to more holistic approaches like yoga therapy which seamlessly integrates talk therapy with yoga and breathwork. In addition, Nicole specializes in both private sessions and group classes for yoga, pilates, and holistic movement. She also conducts immersive workshops, combining the benefits of yoga, breath, and chant, as well as unique Group Motion workshops. Each service is designed to support and guide individuals on their path to mental, emotional, and physical well-being.
            </WLTextV2>
          </div>
        </div>
      </div>
    </section>
  )
}
