import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './GlobalStyle.jsx'
import './index.css';
import { preloadFonts } from './fontLoader.js';
import WeddingInvitationEnvelope from './components/wedding-invitation';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';

preloadFonts()

// Ստեղծում ենք առանձին Main կոմպոնենտ, որտեղ կլինի state-ը
const Main = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <GlobalStyle />
      <App />
      <AnimatePresence>
        {!isOpened && (
          <WeddingInvitationEnvelope onOpen={() => setIsOpened(true)} />
        )}
      </AnimatePresence>
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
