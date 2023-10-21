import { Text, Button, Spacer, Divider } from '@nextui-org/react'
import React from 'react'

import "../assets/style/landingPage.css";
import wave from "../assets/images/grayWaveTop.svg"
import { WLHeaderV2, WLTextV2 } from '../libraries/Web-Legos/components/Text';
import { Alert } from '@mui/material';

const GrayWave = () => (
  <div className='w-100 shadow-bottom' style={{position: "absolute", bottom: -1, left: 0, width: "100vw"}}>
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

export default function LandingPage() {
  return (
    <section id="home" className="landing-page-header-container">
      <hgroup style={{flex: 1}} className="d-flex flex-column align-items-center justify-content-center">
        <WLHeaderV2 h1 size="$4xl" color="#291250">Nicole Levin LCSW CYT</WLHeaderV2>
        <Divider/>
        <Spacer y={0.5} />
        <WLHeaderV2 headerLevel={2} size="$2xl"color="#291250">Psychotherapist ・ Yoga & Pilates Instructor ・ Workshop Leader</WLHeaderV2>
        <Spacer y={1} />
        <Button onClick={() => window.location = "#contact"} rounded color="white" shadow style={{border: "1px solid #00000044"}}>
          Contact Me
        </Button>
        <Spacer y={1} />
      
        <div className="d-flex flex-column align-items-center justify-content-center gap-2">
          <Alert severity="info">Last updated 10/21 @ 6:30pm: After much struggle, this site now looks right on apple devices. I fear that some of the headers don't scale correctly, so I'm working on that. Unfortunately, it looks like I have to update my old iPhone to view the page, so that's this evening's roadblock.</Alert>
        </div>

      </hgroup>
      <GrayWave />
    </section>
  )
}
