import { Divider, Link, Text } from '@nextui-org/react'
import React from 'react'

import image from "../assets/images/windows.jpg";

const StyledLink = (props) => (
  <div className="d-flex flex-row align-items-center justify-content-center py-3 w-100">
    <Link style={{color: "#fefefe", flex: "100%"}} {...props} />
  </div>
)

export const navigatorWidth = "330px"

//style={{position: "fixed"}}

export default function Navigator() {
  return (
    <nav className="d-flex flex-column align-items-center justify-content-center" style={{width: navigatorWidth, height: "100vh", position:"relative"}}>
      <div className="d-flex flex-column align-items-center justify-content-center h-100" style={{width: navigatorWidth, position: "fixed", zIndex: 2, top: 0, left: 0}}>
        <div className="w-100 d-flex flex-row align-items-center justify-content-center">
          <img src={image} alt="nicole" className="nav-headshot"/>
        </div>
        <StyledLink href="/#home">
          Home
        </StyledLink>
        <StyledLink href="/#occupational-therapy">
          Occupational Therapy
        </StyledLink>
        <StyledLink href="/#yoga-and-pilates">
          Yoga & Pilates
        </StyledLink>
        <StyledLink href="/#workshops">
          Workshop Leader
        </StyledLink>
        <StyledLink href="/#contact">
          Contact Me
        </StyledLink>
      </div>
    </nav>
  )
}
