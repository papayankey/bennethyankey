// material components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

// material-utils
import { makeStyles, createStyles, Theme } from '@material-ui/core';

// component
import { Link } from 'react-scroll';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.background.default,
    },
    toolbar: {
      justifyContent: 'flex-end',
    },
    anchor: {
      color: theme.palette.text.primary,
      textTransform: 'uppercase',
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '1.25px',
      marginRight: theme.spacing(4),
    },
    active: {
      fontWeight: 700,
      color: theme.palette.primary.main,
    },
  })
);

// navlinks
const navLinks = ['home', 'about', 'skills', 'portfolio'];

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar elevation={0} position="fixed" className={classes.appBar}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <nav>
            {navLinks.map((link, idx) => {
              let offset = -200;
              if (link === 'portfolio') {
                offset = -150;
              }
              if (link === 'contact') {
                offset = -100;
              }
              return (
                <Link
                  key={idx}
                  activeClass={classes.active}
                  to={link}
                  smooth={true}
                  spy={true}
                  offset={offset}
                  className={classes.anchor}
                >
                  {link}
                </Link>
              );
            })}
            <Button variant="contained" size="large" color="secondary">
              <Link to="contact" smooth={true} spy={true} offset={200}>
                Let's Connect
              </Link>
            </Button>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
