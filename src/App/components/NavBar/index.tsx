// material components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

// material-utils
import {
  makeStyles,
  createStyles,
  Theme,
  useScrollTrigger,
} from '@material-ui/core';

// component
import { Link } from 'react-scroll';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.common.white,
    },
    toolbar: {
      justifyContent: 'flex-end',
    },
    anchor: {
      color: theme.palette.grey[600],
      textTransform: 'uppercase',
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '1.25px',
      marginRight: theme.spacing(4),
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
    active: {
      fontWeight: 700,
      color: theme.palette.primary.main,
    },
    addShadow: {
      boxShadow: '0 1px 1px rgba(0,0,0,0.05)',
    },
  })
);

// constants
const navLinks = ['home', 'about', 'skills', 'portfolio'];
const offset = -150;

function NavBar() {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 1 });
  const classes = useStyles(trigger);

  return (
    <AppBar
      elevation={0}
      position="fixed"
      className={`${classes.appBar} ${trigger ? classes.addShadow : ''}`}
    >
      <Container>
        <Toolbar className={classes.toolbar}>
          <nav>
            {navLinks.map((link, idx) => {
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
              <Link to="contact" smooth={true} spy={true} offset={offset}>
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
