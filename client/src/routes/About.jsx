import { Text, Button, Spacer } from '@nextui-org/react'
import React from 'react'

import {WLHeaderV2, WLTextV2} from "../libraries/Web-Legos/components/Text"

import "../assets/style/about.css";
import woman from "../assets/images/woman.png"

export default function About() {
  return (
    <section id="about" className="about-container">
      <div className="container py-4 d-block w-100 d-md-none">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <Text h1 color="white" size="$5xl">Who am I?</Text>
            <Text color="#8C8C8C">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum enim aut expedita repudiandae tempora accusantium in hic sed atque repellendus debitis, ipsa et, impedit, explicabo esse beatae. Ducimus, delectus.
            </Text>
          </div>
          <div className="col-12 d-flex flex-column align-items-center">
            <img src={woman} alt="nicole" className="headshot" />
          </div>
        </div>
      </div>
      <div className="py-4 d-none w-100 flex-row d-md-flex align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-start px-5" style={{maxWidth: 800}}>
          <div className="d-none d-lg-block">
            <WLHeaderV2 color="white" size="$5xl" align="left">Who am I?</WLHeaderV2>
          </div>
          <div className="d-block d-lg-none w-100">
            <WLHeaderV2 color="white" size="$5xl">Who am I?</WLHeaderV2>
          </div>
          <WLTextV2 indent color="#8C8C8C" align="start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum enim aut expedita repudiandae tempora accusantium in hic sed atque repellendus debitis, ipsa et, impedit, explicabo esse beatae. Ducimus, delectus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ducimus maxime laboriosam odit, ut pariatur ipsa dolorum cumque, repellat aliquid aperiam incidunt, voluptatem eum! Optio incidunt nemo a voluptatibus qui!
          </WLTextV2>
        </div>
        <div className="d-flex flex-column px-5 align-items-center">
          <img src={woman} alt="nicole" className="headshot" />
        </div>
      </div>
    </section>
  )
}
