import React from 'react'

import "../assets/style/yoga.css"
import { WLHeaderV2, WLTextV2 } from '../libraries/Web-Legos/components/Text'
import glyph from "../assets/images/flower.png"

const Left = () => (
  <div className="d-flex flex-column align-items-center justify-content-center" style={{maxWidth: 650}}>
    <WLHeaderV2 h2>Yoga, Pilates, & Dance</WLHeaderV2>
    <WLTextV2>
      In 1999, Nicole was certified as a yoga teacher and completed a secondary certification in 2016. In 2021, she expanded her teaching and became a certified pilates teacher. She is also certified as a Group Motion facilitator. Currently, Nicole teaches yoga, pilates, and holistic movement at yoga centers, athletic clubs, houses of worship, schools, non-profits, and at the Kripalu Center for Yoga and Health.
    </WLTextV2>
  </div>
)

const Right = () => (
  <div className="d-flex flex-column align-items-center justify-content-center" style={{maxWidth: 650}}>
    <WLHeaderV2 h2>Gestalt Workshops</WLHeaderV2>
    <WLTextV2>
      Nicole graduated from a 3 year program in Gestalt therapy in 2012 and now lead workshops integrating gestalt theory and techniques, yoga, breath work and chant. These workshops offer a safe haven for people to explore their deepest feelings and to experience profound transformation. Her unwavering belief in each person's innate ability for healing and wholeness drives her passion and dedication to her work.
    </WLTextV2>
  </div>
)

export default function YogaBanner() {
  return (
    <section id="yoga-and-pilates" className="w-100 yoga-container d-flex flex-column align-items-center justify-content-center py-5" style={{zIndex: 2}}>
      <div className={`w-100`}>
        <div className="wl-glyph-section-two-items-no-actions d-none d-lg-flex wl-gap-3">
          <Left />
          <div className="wl-glyph-section-two-items-no-actions-glyph-container">
            <img src={glyph} alt="glyph" className="wl-glyph-section-glyph" data-testid="wl-glyph-section-glyph" />
          </div>
          <Right />
        </div>
        <div className="wl-glyph-section-two-items-no-actions d-flex d-lg-none">
          <div className="wl-glyph-section-two-items-no-actions-md-container container-fluid">
            <div className="row">
              <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center"><Left /></div>
              <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center"><Right /></div>
            </div>
          </div>
          <div className="wl-glyph-section-two-items-no-actions-glyph-container">
            <img src={glyph} alt="glyph" className="wl-glyph-section-glyph" data-testid="wl-glyph-section-glyph" />
          </div>
        </div>
      </div>
    </section>
  )
}
