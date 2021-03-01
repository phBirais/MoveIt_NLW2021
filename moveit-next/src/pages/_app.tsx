
import '../styles/global.css'; //importanto estilos css

import { ChallengesProvider} from '../contexts/ChallengesContext'
import React, { useState } from 'react';
import {CountdownProvider } from '../contexts/CountdownContext';

function MyApp({ Component, pageProps }) {


  return (
    
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
  
    )
}

export default MyApp
