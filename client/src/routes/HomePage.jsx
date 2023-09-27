import { Card, Spacer, Text, Tooltip } from '@nextui-org/react'
import React from 'react'
import { orangelight } from '../App'
import { useState } from 'react'
import {WLText} from "../libraries/Web-Legos/components/Text"
import { orange200, orange50, lavender600, orange700, oran, lavender600ge8, lavender60000 } from '../libraries/Web-Legos/api/colors'
import { FloatingIsland, QuoteIcon, ThreeDots } from '../libraries/Web-Legos/components/Decoration'

import placeholderImage from "../assets/images/windows.jpg"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IconButton } from '@mui/material'
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import PsychologyTwoToneIcon from '@mui/icons-material/PsychologyTwoTone';
import SelfImprovementTwoToneIcon from '@mui/icons-material/SelfImprovementTwoTone';
import HandymanTwoToneIcon from '@mui/icons-material/HandymanTwoTone';
import SpaTwoToneIcon from '@mui/icons-material/SpaTwoTone';
import { navigatorWidth } from '../components/Navigator'

const enableIcons = false;

const iconProps = {
  style: {
    color: lavender600,
    fontSize: "3rem",
  }
}

const sections = {
  HOME: "home",
  OT: "occupational-therapy",
  YOGA: "yoga-and-pilates",
  WORKSHOPS: "workshops",
  FOOTER: "contact",
}

const sectionsIcons = {
  HOME: <HomeTwoToneIcon {...iconProps} />,
  OT: <PsychologyTwoToneIcon {...iconProps} />,
  YOGA: <SelfImprovementTwoToneIcon {...iconProps} />,
  WORKSHOPS: <HandymanTwoToneIcon {...iconProps} />,
}

export default function HomePage() {

  const TextPlatform = (props) => (
    <div className="py-2">
      <div className="text-platform">
        <WLText indent align={props.center ? "center" : "left"}>
          {props.children}
        </WLText>
      </div>
    </div>
  )

  const HomePageSection = (props) => {
    
    const SectionIcon = ({icon}) => (
      <div style={{position: "absolute", top: "5%", right: "5%"}}>
        {enableIcons && icon}
      </div>
    )
    
    const SectionSwitcherNext = ({nextSection}) => (
      <Tooltip className="bounce" content="Next Section" style={{position: "absolute", bottom: "calc(0% + 2rem)", left: "calc(50%)"}}>
        <IconButton onClick={() => window.location = "/#" + nextSection}>
          <ExpandMoreIcon style={{fontSize: "3rem"}}/>
        </IconButton>
      </Tooltip>
    )
    
    const SectionSwitcherPrev = ({prevSection}) => (
      <Tooltip className="bounce-top" content="Previous Section" style={{position: "absolute", bottom: "calc(0% + 2rem)", left: "calc(50% - 4rem)"}}>
        <IconButton onClick={() => window.location = "/#" + prevSection}>
          <ExpandLessIcon style={{fontSize: "3rem"}}/>
        </IconButton>
      </Tooltip>
    )

    return (
      <section id={props.id} className={"w-100 d-flex flex-column align-items-start justify-content-start " + props.className} style={{minHeight: "100vh", position:"relative"}}>
        <div className="h-100 w-100" style={props.containerStyle}>
          {props.children}
        </div>
        <SectionIcon icon={props.icon} />
        {props.next && <SectionSwitcherNext nextSection={props.next} />}
        {props.prev && <SectionSwitcherPrev prevSection={props.prev} />}
      </section>
    )
  }

  const SectionHeader = (props) => {

    const headerFontSize = null

    return (
      <div className={"d-flex flex-column align-items-center justify-content-center " + props.className}>
        <hgroup className="d-flex flex-row justify-content-center align-items-center">
          <Text h1 className="d-inline" style={{fontSize: props.fontSize ? props.fontSize : headerFontSize}}>
            {props.standard}
            <Text h1 color={lavender600} className="d-inline" style={{marginLeft: ".5rem", fontSize: props.fontSize ? props.fontSize : headerFontSize}}>
              {props.highlighted}
            </Text>
          </Text>
        </hgroup>
      </div>
    )
  }

  const SectionSubheader = (props) => {

    const subheaderColor = "#777777"
    const subheaderSize = "1.5rem";

    return (
      <div className="d-flex flex-column align-items-start justify-content-start">
        <div style={{width: "100%", height: ".5rem", backgroundColor: "black"}}/>
        <Text h2 align="left" className="py-2" color={subheaderColor} style={{fontSize: subheaderSize}}>
          {props.children}
        </Text>
      </div>
    )
  }
  
  const HomeSection = () => {

    const WithQuotes = () => [
      <div className="d-flex flex-row w-100 align-items-center justify-content-start">
        <QuoteIcon color={lavender600}/>
      </div>,
      <TextPlatform>
        This is a space for you to thoroughly introduce yourself. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam minus aut, perspiciatis repellendus qui minima esse corporis id explicabo voluptate, dolore, adipisci obcaecati illo ad fugit? Dignissimos, perferendis dolorum. This is a space for you to thoroughly introduce yourself. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam minus aut, perspiciatis repellendus qui minima esse corporis id explicabo voluptate, dolore, adipisci obcaecati illo ad fugit? Dignissimos, perferendis dolorum.
      </TextPlatform>,
      <TextPlatform>
        This is a space for you to thoroughly introduce yourself. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam minus aut, perspiciatis repellendus qui minima esse corporis id explicabo voluptate, dolore, adipisci obcaecati illo ad fugit? Dignissimos, perferendis dolorum. This is a space for you to thoroughly introduce yourself. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam minus aut, perspiciatis repellendus qui minima esse corporis id explicabo voluptate, dolore, adipisci obcaecati illo ad fugit? Dignissimos, perferendis dolorum.
      </TextPlatform>,
      <div className="d-flex flex-row w-100 align-items-center justify-content-end">
          <QuoteIcon style={{transform: "scaleX(-1) translateY(-2.5rem)"}} color={lavender600}/>
      </div>
    ]

    return (
      <HomePageSection id={sections.HOME} icon={sectionsIcons.HOME} next={sections.OT} className="home-container">
        <div className="container py-5" style={{padding: 0}}>
          <div className="row align-items-center justify-content-center d-flex flex-row">
            <div className="col-12 px-2 px-md-5 d-flex flex-column align-items-center justify-content-center">
              <SectionHeader standard="Nicole" highlighted="Levin" fontSize="4rem"/>
              <SectionSubheader>This is a very brief introduction personal introduction— an abstract.</SectionSubheader>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="w-100  px-2 px-lg-5 d-flex flex-column align-items-center justify-content-center" style={{maxWidth: 700}}>
            <WithQuotes />
          </div>
        </div>
      </HomePageSection>
    )
  }

  const OTSection = () => {

    return (
      <HomePageSection id={sections.OT} icon={sectionsIcons.OT} prev={sections.HOME} next={sections.YOGA} className="wave" >
        <Spacer y={2} />
        <div className="container py-5 d-flex flex-column align-items-center justify-content-center" style={{padding: 0}}>
          <div className="row align-items-center justify-content-center d-flex flex-row">
            <div className="col-12 col-xxl-6 py-5 px-2 px-lg-5 d-flex flex-column align-items-start justify-content-start" style={{backgroud:"red"}}>
              
              <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                <SectionHeader standard="Occupational" highlighted="Therapy"/>
                <SectionSubheader>I've been practicing occupational therapy for "x" years...</SectionSubheader>
              </div>
              
              <Spacer y={1} />

              <TextPlatform>
                Occupational therapy is a client-centered health profession that empowers individuals of all ages to live life to its fullest by promoting health, and preventing—or helping them live better with—injury, illness, or disability. OT practitioners enable people to participate in everyday activities or "occupations" through tailored interventions, adaptive techniques, and environment modifications. Whether it's helping a child with developmental delays, aiding an adult in recovering from injury, or supporting seniors in maintaining their independence, occupational therapy plays a crucial role in enhancing quality of life.
              </TextPlatform>
              
              <div className="px-2" >
                <div className="w-100 d-flex flex-row align-items-center justify-content-center">
                <div 
                    style={{
                      background: lavender600,
                      width: "100%",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      height: 2,
                    }}
                  />
                  <div className="w-100" style={{flex: 1, minWidth: 200}}>
                    <Text h2 color={lavender600}>Virtual Practice</Text>
                  </div>
                  <div 
                    style={{
                      background: lavender600,
                      width: "100%",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      height: 2,
                    }}
                  />
                </div>
                <TextPlatform>
                  I conduct my services virtually. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi doloremque nemo, officia ad deserunt, repudiandae facere ab sit dignissimos excepturi temporibus dicta omnis debitis atque commodi?
                </TextPlatform>
              </div>
            </div>
            <div className="col-12 col-xxl-6 p-5">
              <img src={placeholderImage} alt="homepage" className="nicole-image ot-img"/>
            </div>
          </div>
        </div>
      </HomePageSection>
    )
  }
  
  const YogaSection = () => {

    const StudioFeature = ({image, title, memo, location}) => (
      <Card as="figure" className="gap-2 d-flex flex-row align-items-center justify-content-center" css={{borderRadius: 0, maxHeight: 300, border: "2px solid #777777"}} isPressable isHoverable>
          <Card.Image src={image} alt={title} style={{height: "100%", width: "100%", maxWidth: 300, objectFit:"cover"}} />
          <figcaption className="d-flex flex-column align-items-start justify-content-start" style={{flex: 2}}>
            <Text b align="left">{title}</Text>
            <Text size="large" align="left">{memo}</Text>
            <Text color="#777777" align="left">{location}</Text>
          </figcaption>
      </Card>
    )
    
    return (
      <HomePageSection id={sections.YOGA} icon={sectionsIcons.YOGA} prev={sections.OT} next={sections.WORKSHOPS} >
        <div className="container py-5" style={{padding: 0}}>
          <div className="row align-items-center justify-content-center d-flex flex-row">
            <div className="col-12 d-flex flex-column align-items-center justify-content-center">
              <SectionHeader standard="Yoga & Pilates" highlighted="Instructor"/>
              <SectionSubheader>Something emphasizing how important movement is for wellbeing</SectionSubheader>
            </div>
            <div className="col-12">
              <Spacer y={2} />
            </div>
            <div className="col-5 px-2 px-lg-5 d-flex flex-column align-items-center justify-content-center">
              <div className="text-container">
                <ThreeDots left color={lavender600}/>
                <Text h2>My Experience</Text>
                <TextPlatform>
                  I've been teaching yoga & pilates for "x" years. In this time I've taught at "y" studios and... Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum iusto asperiores alias id. Iure nemo, natus mollitia ipsam facere rem molestiae hic doloremque delectus quam ea fuga in consectetur.
                </TextPlatform>
                <Text h2>Why Move?</Text>
                <TextPlatform>
                  Movement is important for wellbeing becuase Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minus voluptatum aspernatur dicta non! Adipisci, culpa voluptatum rem quae cum molestiae ad veniam eum atque possimus fuga nam ipsum nisi.                
                </TextPlatform>
                <ThreeDots right color={lavender600}/>
              </div>
            </div>
            <div className="col-7 gap-4 d-flex flex-column align-items-center justify-content-center px-5">
              <StudioFeature image={placeholderImage} title="Studio 1" location="123 West St, Boston MA— Tuesdays @ 4pm" memo="At studio 1 I lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minus voluptatum aspernatur dicta non! Adipisci, culpa voluptatum rem quae cum molestiae ad"/>
              <StudioFeature image={placeholderImage} title="Studio 2" location="123 West St, Boston MA— Tuesdays @ 4pm" memo="At studio 2 I lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minus voluptatum aspernatur dicta non! Adipisci, culpa voluptatum rem quae cum molestiae ad"/>
            </div>
          </div>
        </div>
      </HomePageSection>
    )
  }
  
  const WorkshopSection = () => {
    
    const StudioFeature = ({image, title, memo, location}) => (
      <Card as="figure" className="gap-2 d-flex flex-row align-items-center justify-content-center" css={{borderRadius: 0, maxHeight: 300,  border: "2px solid #777777"}} isPressable isHoverable>
          <Card.Image src={image} alt={title} style={{height: "100%", width: "100%", maxWidth: 300}} />
          <figcaption className="d-flex flex-column align-items-start justify-content-start" style={{flex: 2}}>
            <Text b align="left">{title}</Text>
            <Text size="large" align="left">{memo}</Text>
            <Text color="#777777" align="left">{location}</Text>
          </figcaption>
      </Card>
    )

    return (
      <HomePageSection id={sections.WORKSHOPS} icon={sectionsIcons.WORKSHOPS} prev={sections.YOGA} next={sections.FOOTER} >
        <div className="container-fluid py-5" style={{padding: 0}}>
          <div className="row align-items-center justify-content-center d-flex flex-row">
            <div className="col-12 d-flex flex-column align-items-center justify-content-center">
              <SectionHeader standard="Workshop" highlighted="Leader"/>
              <SectionSubheader>Come visit me at one of my workshops! </SectionSubheader>
            </div>
            <div className="col-12">
              <Spacer y={2} />
            </div>
            <div className="col-7 gap-4 d-flex flex-column align-items-center justify-content-center px-5">
              <StudioFeature image={placeholderImage} title="Workshop 1" location="123 West St, Boston MA— Tuesdays @ 4pm" memo="At studio 1 I lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minus voluptatum aspernatur dicta non! Adipisci, culpa voluptatum rem quae cum molestiae ad"/>
              <StudioFeature image={placeholderImage} title="Workshop 2" location="123 West St, Boston MA— Tuesdays @ 4pm" memo="At studio 2 I lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minus voluptatum aspernatur dicta non! Adipisci, culpa voluptatum rem quae cum molestiae ad"/>
            </div>
            <div className="col-5 px-2 px-lg-5">
              <div className="text-container">
                <ThreeDots left color={lavender600}/>
                <Text h2>What I Teach</Text>
                <TextPlatform>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum iusto asperiores alias id. Iure nemo, natus mollitia ipsam facere rem molestiae hic doloremque delectus quam ea fuga in consectetur.
                </TextPlatform>
                <Text h2>How To Attend</Text>
                <TextPlatform>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minus voluptatum aspernatur dicta non! Adipisci, culpa voluptatum rem quae cum molestiae ad veniam eum atque possimus fuga nam ipsum nisi.                
                </TextPlatform>
                <ThreeDots right color={lavender600}/>
              </div>
            </div>
          </div>
        </div>
      </HomePageSection>
    )
  }

  return (
    <main className="w-100">
      <HomeSection />
      <OTSection />
      <YogaSection />
      <WorkshopSection />
    </main>
  )
}
