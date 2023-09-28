import React from 'react'

import "../assets/style/yoga.css"
import { WLHeaderV2 } from '../libraries/Web-Legos/components/Text'

export default function YogaBanner() {
  return (
    <section id="yoga-and-pilates" className="w-100 yoga-container d-flex flex-column align-items-center justify-content-center py-5" style={{zIndex: 2}}>
      <WLHeaderV2>Yoga & Pilates</WLHeaderV2>
      <WLHeaderV2 h2 size="$2xl" color="#5F5A67">Come visit me in one of my yoga classes!</WLHeaderV2>
    </section>
  )
}
