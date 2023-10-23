// Library Imports
import {Divider, Link, Spacer, styled} from "@nextui-org/react"
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

// Style Imports
import './App.css';

// Component Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Text } from '@nextui-org/react';
import { createContext, useEffect, useState } from 'react';

import {FooterAuthButton} from "./libraries/Web-Legos/components/Auth"

import {LineButton} from "./libraries/Web-Legos/components/Buttons"

// API Imports
import { firebaseConfig } from './api/firebase.ts'
import { AuthenticationManager, WLPermissionsConfig } from './libraries/Web-Legos/api/auth.ts'
import { AnalyticsManager } from './libraries/Web-Legos/api/analytics.ts'
import Navigator, { navigatorWidth } from './components/Navigator';
import { lavender600, orange200 } from './libraries/Web-Legos/api/colors';
import LandingPage from './routes/LandingPage';
import EducationAndCertifications from "./routes/EducationAndCertifications";
import Psychotherapy from "./routes/Psychotherapy";
import YogaBanner from "./routes/YogaBanner";
import PersonalStatement from "./routes/PersonalStatement";
import { WLHeaderV2, WLTextV2 } from "./libraries/Web-Legos/components/Text";
import { useContext } from "react";

/** Context to keep track whether we're running tests right now */
export const TestingContext = createContext();
export const CurrentSignInContext = createContext();

/** Site specific permissions */
const permissions = new WLPermissionsConfig();

/** Site AuthenticationManager */
const authenticationManager = new AuthenticationManager(firebaseConfig, permissions);
authenticationManager.initialize();

/** Site AnalyticsManager */
const analyticsManager = new AnalyticsManager(firebaseConfig)
analyticsManager.initialize();

export function App(props) {

  const [currentSignIn, setCurrentSignIn] = useState(null)

  /** Whether this is a testing environment */
  const isTestingEnvironment = props.isTestingEnvironment;

  /** Provider for all app contexts */
  function AppContextProvider(props) {
    return (
      <TestingContext.Provider value={{isTestingEnvironment}} >
      <CurrentSignInContext.Provider value={{currentSignIn}} >
        {props.children}
      </CurrentSignInContext.Provider>
      </TestingContext.Provider>
    )
  }

  analyticsManager.logPageView("home")

  const [userCanEditText, setUserCanEditText] = useState(false);
  const [userCanEditImages, setUserCanEditImages] = useState(false);

  useEffect(() => {
    authenticationManager.getPermission(currentSignIn, "siteText").then(p => setUserCanEditText(p));
    authenticationManager.getPermission(currentSignIn, "siteImages").then(p => setUserCanEditImages(p));
  }, [currentSignIn]);

  // If we're testing, just place everything in context provider
  if (props.children) {
    return (
      <AppContextProvider >
        { isTestingEnvironment && <meta data-testid="wl-testing-flag" /> }
        {props.children}
      </AppContextProvider>
    )
  }

  const FooterLeftLarge = () => (
    <div className="col-lg-6 d-none d-lg-flex flex-column aligh-items-center justify-content-center">
      <WLHeaderV2 size="$4xl" color="white" align="left">Nicole Levin LCSW CYT</WLHeaderV2>
      <div className="d-flex flex-row gap-2 align-items-center justify-content-start">
        <Link href="mailto:nicolelevinlcsw@gmail.com">
          <Text color="#8C8C8C" size="$lg" css={{textDecoration:"underline"}}>nicolelevinlcsw@gmail.com</Text>
        </Link>
        <Text color="#8C8C8C">・</Text>
        <Link href="callto:2156687277">
          <Text color="#8C8C8C" size="$lg" css={{textDecoration:"underline"}}>(215) 668-7277</Text>
        </Link>
      </div>
      <div className="d-flex flex-row gap-2 align-items-center justify-content-start">
        <Link href="https://www.nicolelevin.org">
          <Text color="#8C8C8C" css={{textDecoration:"underline"}}>nicolelevin.org</Text>
        </Link>
        <Text color="#8C8C8C">・</Text>
        <Link href="https://www.psychologytoday.com/profile/66839">
          <Text color="#8C8C8C" css={{textDecoration:"underline"}}>Psychology Today</Text>
        </Link>
      </div>
    </div>
  )

  const FooterLeftCentered = () => (
    <div className="d-flex flex-column align-items-center d-lg-none" style={{maxWidth: 600}}>
      <div className="d-md-flex flex-row d-none gap-2 align-items-center justify-content-start">
        <Link href="mailto:nicolelevinlcsw@gmail.com">
          <Text color="#8C8C8C" size="$lg" css={{textDecoration:"underline"}}>nicolelevinlcsw@gmail.com</Text>
        </Link>
        <Text color="#8C8C8C">・</Text>
        <Link href="callto:2156687277">
          <Text color="#8C8C8C" size="$lg" css={{textDecoration:"underline"}}>(215) 668-7277</Text>
        </Link>
      </div>
      <div className="d-flex flex-row d-md-none gap-2 align-items-center justify-content-start">
        <Link href="mailto:nicolelevinlcsw@gmail.com">
          <Text color="#8C8C8C" size="$lg" css={{textDecoration:"underline"}}>nicolelevinlcsw@gmail.com</Text>
        </Link>
      </div>
      <div className="d-flex flex-row d-md-none gap-2 align-items-center justify-content-start">
        <Link href="callto:2156687277">
          <Text color="#8C8C8C" size="$lg" css={{textDecoration:"underline"}}>(215) 668-7277</Text>
        </Link>
      </div>
      <div className="d-md-flex d-none flex-row gap-2 align-items-center justify-content-start">
        <Link href="https://www.nicolelevin.org">
          <Text color="#8C8C8C" css={{textDecoration:"underline"}}>nicolelevin.org</Text>
        </Link>
        <Text color="#8C8C8C">・</Text>
        <Link href="https://www.psychologytoday.com/profile/66839">
          <Text color="#8C8C8C" css={{textDecoration:"underline"}}>Psychology Today</Text>
        </Link>
      </div>
      <div className="d-flex flex-row d-md-none gap-2 align-items-center justify-content-start">
        <Link href="https://www.nicolelevin.org">
          <Text color="#8C8C8C" css={{textDecoration:"underline"}}>nicolelevin.org</Text>
        </Link>
      </div>
      <div className="d-flex flex-row d-md-none gap-2 align-items-center justify-content-start">
        <Link href="https://www.psychologytoday.com/profile/66839">
          <Text color="#8C8C8C" css={{textDecoration:"underline"}}>Psychology Today</Text>
        </Link>
      </div>
    </div>
  )

  const FooterRightLarge = () => (
    <div className="col-lg-6 d-none d-lg-block">
      <div className="mb-1 d-flex flex-column align-items-center justify-content-center">
        <WLHeaderV2 color="white" align="right" size="$lg">Education:</WLHeaderV2>
        <WLTextV2 color="#8c8c8c" align="right">
          University of Pennsylvania MSW (1997) ・ Boston University BA in Psychology (1993)
        </WLTextV2>
      </div>
      <div className="mb-1 d-flex flex-column align-items-center justify-content-center">
        <WLHeaderV2 color="white" align="right" size="$lg">Professional Memberships:</WLHeaderV2>
        <WLTextV2 color="#8c8c8c" align="right">
          Pennsylvania Society of Clinical Social Workers
        </WLTextV2>
      </div>
      <div className="mb-1 d-flex flex-column align-items-center justify-content-center">
        <WLHeaderV2 color="white" align="right" size="$lg">Certifications:</WLHeaderV2>
        <WLTextV2 color="#8c8c8c" align="right">
          PA Licensed Clinical Social Worker ・ Gestalt Therapist ・ Yoga Teacher ・ Pilates Teacher ・ Group Motion Facilitator
        </WLTextV2>
      </div>
    </div>
  )
  const FooterRightCentered = () => (
    <div className="d-lg-none d-flex flex-column align-items-center d-lg-none" style={{maxWidth: 600}}>
      <div className="mb-4 d-flex flex-column align-items-center justify-content-center">
        <WLHeaderV2 align="center" color="white" size="$lg">Education:</WLHeaderV2>
        <WLTextV2 align="center" color="#8c8c8c">
          University of Pennsylvania MSW (1997) ・ Boston University BA in Psychology (1993)
        </WLTextV2>
      </div>
      <div className="mb-4 d-flex flex-column align-items-center justify-content-center">
        <WLHeaderV2 align="center" color="white" size="$lg">Professional Memberships:</WLHeaderV2>
        <WLTextV2 align="center" color="#8c8c8c">
          Pennsylvania Society of Clinical Social Workers
        </WLTextV2>
      </div>
      <div className="mb-4 d-flex flex-column align-items-center justify-content-center">
        <WLHeaderV2 align="center" color="white" size="$lg">Certifications:</WLHeaderV2>
        <WLTextV2 align="center" color="#8c8c8c">
          PA Licensed Clinical Social Worker ・ Gestalt Therapist ・ Yoga Teacher ・ Pilates Teacher ・ Group Motion Facilitator
        </WLTextV2>
      </div>
    </div>
  )

  // Return the app
  return (
    <AppContextProvider>
      <Navigator />
      <main 
        className="App d-flex flex-column align-items-center w-100" 
        data-testid="app"
        style={{
          "--backgroundColor": "#FAFAFA",
          "--orangeDark": `${lavender600}aa`,
          "--orangePrimary": lavender600,
          "--textBg": `${lavender600}33`,
        }}
      >
        { isTestingEnvironment && <meta data-testid="wl-testing-flag" /> }
        <LandingPage userCanEditText={userCanEditText} />
        <EducationAndCertifications userCanEditText={userCanEditText} userCanEditImages={userCanEditImages} />
        <Psychotherapy userCanEditText={userCanEditText}/>
        <YogaBanner userCanEditText={userCanEditText} />
        <PersonalStatement userCanEditText={userCanEditText}/>
      </main>
      <footer id="contact" className="p-5 flex-column align-items-center justify-content-center">
        <div className="d-lg-none d-flex align-items-center justify-content-center">
          <WLHeaderV2 size="$4xl" color="white" align="center">Nicole Levin LCSW CYT</WLHeaderV2>
        </div>
        <FooterRightCentered />
        <div className="d-lg-none d-flex">
          <Spacer y={1}/>
        </div>
        <FooterLeftCentered />
        <div className="row w-100 d-none d-lg-flex">
          <FooterLeftLarge />
          <FooterRightLarge />
        </div>
        <div className="d-lg-none d-flex">
          <Spacer y={1}/>
        </div>
        <div className="d-lg-flex w-100 d-none flex-row gap-2 align-items-end justify-content-center">
          <Link href="https://www.joed.dev">
            <Text color="#8C8C8C" css={{textDecoration:"underline"}}>Web Designer: Joe Dobbelaar</Text>
          </Link>
          <FooterAuthButton link color="#8C8C8C" authManager={authenticationManager} currentSignIn={currentSignIn} setCurrentSignIn={setCurrentSignIn}/>
        </div>
        <div className="d-flex d-lg-none flex-row gap-2 align-items-center justify-content-center">
          <Link href="https://www.joed.dev">
            <Text color="#8C8C8C" css={{textDecoration:"underline"}}>Web Designer: Joe Dobbelaar</Text>
          </Link>
        </div>
        <div className="d-flex d-lg-none flex-row gap-2 align-items-center justify-content-center">
          <FooterAuthButton link color="#8C8C8C" authManager={authenticationManager} currentSignIn={currentSignIn} setCurrentSignIn={setCurrentSignIn}/>
        </div>
      </footer>
    </AppContextProvider>
  );
}

export default App;
