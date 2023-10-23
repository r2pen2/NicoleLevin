import React, { useEffect, useState } from 'react'

import "../assets/style/personalStatement.css"
import { QuoteBlock, WLHeaderV2, WLTextV2 } from '../libraries/Web-Legos/components/Text'
import { Spacer } from '@nextui-org/react'

import { Swoosh } from '../libraries/Web-Legos/components/Waves'

export default function PersonalStatement({userCanEditText}) {
  return (
    <section id="personal-statement" className="w-100 workshops-container d-flex flex-column align-items-center justify-content-center pt-5" >
      <div className="workshops-content px-4 px-md-5">
        <QuoteBlock outlineColor="white" color="#281250">
          <WLHeaderV2 firestoreId="personal-statement-header" editable={userCanEditText} />
          <WLTextV2 color="#5F5A67" firestoreId="personal-statement" editable={userCanEditText} />
        </QuoteBlock>
        <Spacer y={2} />
      </div>
      <Spacer y={2} />
      <Swoosh flipX className="shadow-top" style={{position: "absolute", bottom: -1, left: 0}} color="#1E1E1E"/>
    </section>
  )
}
