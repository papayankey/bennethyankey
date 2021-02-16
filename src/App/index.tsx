// material components
import CSSBaseline from '@material-ui/core/CssBaseline';

// material utils
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';

// components
import {
  NavBar,
  Hero,
  About,
  Skills,
  Portfolio,
  Contact,
  Footer,
} from './components';
import { Main } from './common';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSBaseline />
      <NavBar />
      <Main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </Main>
      <Footer />
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}

export default App;
