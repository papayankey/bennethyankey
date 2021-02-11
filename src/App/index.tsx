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
import { Main, City } from './common';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSBaseline />
      <NavBar />
      <City />
      <Main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
