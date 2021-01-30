// material components
import CSSBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSBaseline />
      <NavBar />
      <Container>
        <Hero />
        <About />
        <Skills />
      </Container>
      <Portfolio />
      <Container>
        <Contact />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
