import { Text, Button, Spacer, Divider } from '@nextui-org/react'
import React from 'react'

import "../assets/style/landingPage.css";
import wave from "../assets/images/grayWaveTop.svg"
import { WLHeaderV2, WLTextV2 } from '../libraries/Web-Legos/components/Text';

export default function LandingPage() {
  return (
    <section id="home" className="landing-page-header-container">
      <hgroup style={{flex: 1}} className="d-flex flex-column align-items-center justify-content-center">
        <WLHeaderV2 h1 size="$5xl" color="#291250">Nicole Levin LCSW CYT</WLHeaderV2>
        <WLHeaderV2 headerLevel={2} size="$2xl"color="#291250">Psychotherapist ・ Yoga & Pilates Instructor ・ Workshop Leader</WLHeaderV2>
        <Divider/>
        <Spacer y={0.5} />
        <div style={{maxWidth: 800}}>
          <WLTextV2 color="#291250">
            Nicole offers a diverse range of therapeutic services tailored to individual needs. Her expertise spans individual psychotherapy employing traditional talk therapy techniques, to more holistic approaches like yoga therapy which seamlessly integrates talk therapy with yoga and breathwork. In addition, Nicole specializes in both private sessions and group classes for yoga, pilates, and holistic movement. She also conducts immersive workshops, combining the benefits of yoga, breath, and chant, as well as unique Group Motion workshops. Each service is designed to support and guide individuals on their path to mental, emotional, and physical well-being.
          </WLTextV2>        
        </div>
        <Spacer y={2} />
        <div className="shadow-bottom">
          <Button onClick={() => window.location = "#contact"} rounded color="white" className="landing-button">
            Contact Me
          </Button>
        </div>
      </hgroup>
        <img src={wave} alt="wave" className='w-100 shadow-top' style={{position: "absolute", bottom: -1, left: 0, width: "100vw"}}/>
    </section>
  )
}
