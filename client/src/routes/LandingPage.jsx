// Library Imports
import { Button, Spacer, Divider } from '@nextui-org/react'
import React from 'react'
import { Alert } from '@mui/material';

// Style Imports
import "../assets/style/landingPage.css";

// Component Imports
import { WLHeaderV2 } from '../libraries/Web-Legos/components/Text';
import { Swoosh } from '../libraries/Web-Legos/components/Waves';
import { useContext } from 'react';
import { useState } from 'react';
import { CurrentSignInContext } from '../App';
import { AuthenticationManager } from '../libraries/Web-Legos/api/auth.ts';
import { useEffect } from 'react';


const headerColor = "#291250";

const Updates = () => (
  <div className="d-flex flex-column align-items-center justify-content-center gap-2">
    <Alert severity="info">Last updated 10/22 @ 7:45pm: Headers should be looking good now. I'll send you an email with login instructions on 10/23.</Alert>
  </div>
)

export default function LandingPage({userCanEditText}) {

  return (
    <section id="home" className="landing-page-header-container">
      <hgroup style={{flex: 1}} className="d-flex flex-column align-items-center justify-content-center">
        <WLHeaderV2 size="$4xl" color={headerColor} firestoreId="splash-title" editable={userCanEditText} />
        <Divider/>
        <Spacer y={0.5} />
        <WLHeaderV2 h2 size="$2xl" color={headerColor} firestoreId="splash-subtitle" editable={userCanEditText} />
        <Spacer y={1} />
        <Button onClick={() => window.location = "#contact"} rounded color="white" shadow style={{border: "1px solid #00000044"}}>
          Contact Me
        </Button>
        <Spacer y={1} />
        <Updates />
      </hgroup>
      <Swoosh className="shadow-top" style={{position: "absolute", bottom: -1, left: 0}} color="#1E1E1E"/>
    </section>
  )
}
