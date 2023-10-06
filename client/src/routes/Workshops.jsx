import React from 'react'

import breathwork from "../assets/images/breathwork.png"
import dance from "../assets/images/dance.png"

import "../assets/style/workshops.css"
import { WLHeaderV2, WLTextV2 } from '../libraries/Web-Legos/components/Text'
import { Spacer } from '@nextui-org/react'

import wave from "../assets/images/grayWaveTop.svg"

export default function Workshops() {
  
  const BreathworkInline= () => (
    <div className="row">
      <div className="col-12 col-sm-6">
        <img src={breathwork} alt="breathwork" className="workshop-image" />
      </div>
      <div className="col-12 col-sm-6 text-container">
        <WLTextV2 b size="$lg" align="right">Breathwork</WLTextV2>,
        <WLTextV2 color="#8c8c8c" size="$lg" align="right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
        </WLTextV2>
      </div>
    </div>
  )

  const DanceInline = () => (
    <div className="row">
      <div className="col-12 col-sm-6 text-container">
        <WLTextV2 b size="$lg" align="left">Improv Dance</WLTextV2>
        <WLTextV2 color="#8c8c8c" size="$lg" align="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
        </WLTextV2>
      </div>
      <div className="col-12 col-sm-6">
        <img src={dance} alt="dance" className="workshop-image" />
      </div>
    </div>
  )

  return (
    <section id="workshops" className="w-100 workshops-container d-flex flex-column align-items-center justify-content-center pt-5" >
      <div className="workshops-content px-2 px-md-5">
        <WLHeaderV2>Education & Certifications</WLHeaderV2>
        <WLHeaderV2 h2 size="$2xl" color="#5F5A67">
          Somewhere here will be education and certifications. We can put your services with the psychotherapy overview, which I will need to be larger.
        </WLHeaderV2>
        <Spacer y={2} />
        {/* <div className="workshop-details px-2 px-lg-3">
          <div className="container-fluid w-100 d-sm-block d-none">
            <BreathworkInline />
            <DanceInline />
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center d-sm-none px-2">
            
            <img src={breathwork} alt="breathwork" className="workshop-image" />
            <WLTextV2 b size="$lg">Breathwork</WLTextV2>
            <WLTextV2 color="#8c8c8c" size="$lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            </WLTextV2>

            <Spacer y={2} />
            <img src={dance} alt="dance" className="workshop-image" />
            <WLTextV2 b size="$lg">Improv Dance</WLTextV2>
            <WLTextV2 color="#8c8c8c" size="$lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            </WLTextV2>
          </div>
        </div> */}
      </div>
      <Spacer y={2} />
      <img src={wave} alt="wave" className='w-100 shadow-top' style={{transform: "scaleX(-1)", width: "100vw", position: "absolute", bottom: -1, left: 0}}/>
    </section>
  )
}
