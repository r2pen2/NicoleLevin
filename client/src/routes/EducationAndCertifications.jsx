import { Text, Button, Spacer } from '@nextui-org/react'
import React, { memo, useEffect, useState } from 'react'

import {WLHeaderV2, WLTextV2} from "../libraries/Web-Legos/components/Text"

import "../assets/style/about.css";
import nicole from "../assets/images/nicole.jpg"
import { EducationItem, MembershipItem, CertificationItem } from '../api/siteModels.ts';


export default function EducationAndCertifications() {
  
  const [educationItems, setEducationItems] = useState([]);
  const [membershipItems, setMembershipItems] = useState([]);
  const [certificationItems, setCertificationItems] = useState([]);

  useEffect(() => {
    setEducationItems([EducationItem.examples().pa, EducationItem.examples().bu])
    setMembershipItems([MembershipItem.examples().default])
    setCertificationItems([CertificationItem.examples().pa, CertificationItem.examples().gt, CertificationItem.examples().yoga, CertificationItem.examples().pilates, CertificationItem.examples().gm])
  }, [])

  const Item = ({item}) => (
    <li aria-label='education-item'>
      <Text align="left" className="d-flex flex-row align-items-center justify-content-center gap-1" color="white">
        {item.title}
        {item.subtitle ? " — " : ""}
        {item.subtitle}
      </Text>
    </li>
  )

  function renderEducation() {
    return educationItems.map((e, i) => <Item item={e} key={i} />)
  }

  function renderMemberships() {
    return membershipItems.map((m, i) => <Item item={m} key={i} />)
  }

  function renderCertifications() {
    return certificationItems.map((m, i) => <Item item={m} key={i} />)
  }

  return (
    <section id="about" className="about-container">
      <div className="container py-2">
        <div className="row d-flex flex-row align-items-center justify-content-center">
          <div className="col-xl-4 col-lg-12 col-12 d-flex flex-column align-items-center py-2">
            <img src={nicole} alt="education-glyph" style={{maxHeight: 200, width: 200, objectFit:"cover", borderRadius: "50%"}} />
          </div>
          <div className="col-xl-4 col-lg-6 col-12 d-flex flex-column align-items-center py-2">
            <WLHeaderV2 color="white" size="$3xl">Education:</WLHeaderV2>
            <ol>
              {renderEducation()}
            </ol>
            <WLHeaderV2 color="white" size="$3xl">Professional Memberships:</WLHeaderV2>
            <ol>
              {renderMemberships()}
            </ol>
          </div>
          <div className="col-xl-4 col-lg-6 col-12 d-flex flex-column align-items-center">
            <WLHeaderV2 color="white" size="$3xl">Certifications:</WLHeaderV2>
            <ol>
              {renderCertifications()}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
