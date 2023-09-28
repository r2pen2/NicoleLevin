// Library Imports
import {Link, styled} from "@nextui-org/react"

// Style Imports
import './App.css';

// Component Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Text } from '@nextui-org/react';
import { createContext } from 'react';

import {LineButton} from "./libraries/Web-Legos/components/Buttons"

// API Imports
import { firebaseConfig } from './api/firebase.ts'
import { AuthenticationManager, WLPermissionsConfig } from './libraries/Web-Legos/api/auth.ts'
import { AnalyticsManager } from './libraries/Web-Legos/api/analytics.ts'
import Navigator, { navigatorWidth } from './components/Navigator';
import { lavender600, orange200 } from './libraries/Web-Legos/api/colors';
import LandingPage from './routes/LandingPage';
import About from "./routes/About";
import Psychotherapy from "./routes/Psychotherapy";
import YogaBanner from "./routes/YogaBanner";
import Yoga from "./routes/Yoga";
import Workshops from "./routes/Workshops";
import { WLHeaderV2, WLTextV2 } from "./libraries/Web-Legos/components/Text";

/** Context to keep track whether we're running tests right now */
export const TestingContext = createContext();

/** Site specific permissions */
const permissions = new WLPermissionsConfig();

/** Site AuthenticationManager */
const authenticationManager = new AuthenticationManager(firebaseConfig, permissions);
authenticationManager.initialize();

/** Site AnalyticsManager */
const analyticsManager = new AnalyticsManager(firebaseConfig)
analyticsManager.initialize();

export function App(props) {

  /** Whether this is a testing environment */
  const isTestingEnvironment = props.isTestingEnvironment;

  /** Provider for all app contexts */
  function AppContextProvider(props) {
    return (
      <AuthenticationManager.Context.Provider value={{AuthenticationManager}} >
      <AnalyticsManager.Context.Provider value={{analyticsManager}} >
      <TestingContext.Provider value={{isTestingEnvironment}} >
        {props.children}
      </TestingContext.Provider>
      </AnalyticsManager.Context.Provider>
      </AuthenticationManager.Context.Provider >
    )
  }

  // If we're testing, just place everything in context provider
  if (props.children) {
    return (
      <AppContextProvider >
        { isTestingEnvironment && <meta data-testid="wl-testing-flag" /> }
        {props.children}
      </AppContextProvider>
    )
  }

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
        <LandingPage />
        <About />
        <Psychotherapy />
        <YogaBanner />
        <Yoga />
        <Workshops />
      </main>
      <footer id="contact" className="p-5">
        <WLHeaderV2 size="$4xl" color="white" align="center">Nicole Levin</WLHeaderV2>
        <div className="d-flex flex-row gap-2 align-items-center justify-content-center">
          <Link href="mailto:nicole@nicole.com">
            <Text color="#8C8C8C" size="$lg" css={{textDecoration:"underline"}}>nicole@nicole.com</Text>
          </Link>
          <Text color="#8C8C8C">・</Text>
          <Link href="callto:7818799058">
            <Text color="#8C8C8C" size="$lg" css={{textDecoration:"underline"}}>(781) 879-9058</Text>
          </Link>
        </div>
            <Link href="https://www.joed.dev">
              <Text color="#8C8C8C" css={{textDecoration:"underline"}}>Web Designer: Joe Dobbelaar</Text>
            </Link>
          <Link href="">
            <Text color="#8C8C8C" css={{textDecoration:"underline"}}>Admin Login</Text>
          </Link>
        <div className="d-flex flex-row align-items-center justify-content-around w-100">
        </div>
      </footer>
    </AppContextProvider>
  );
}

export default App;
