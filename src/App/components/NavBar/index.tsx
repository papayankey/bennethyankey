// react
import { Fragment, useEffect, useState, useRef } from 'react';

// material components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import HamburgerIcon from '@material-ui/icons/Menu';

// material utils
import { useScrollTrigger } from '@material-ui/core';

// components
import { Link } from 'react-scroll';
import { NavLinks } from '../../common';
import { MobileNavigation } from './Mobile/index';

// styles
import { useStyles } from './styles';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const rootElement = useRef(document.querySelector('#root'))
    .current as HTMLDivElement;

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 1 });
  const classes = useStyles();

  useEffect(() => {
    if (menuOpen) {
      document.body.style['overflow'] = 'hidden';
      rootElement.style['overflow'] = 'hidden';
    } else {
      document.body.style['overflow'] = 'auto';
      rootElement.style['overflow'] = 'auto';
    }
  }, [menuOpen, rootElement]);

  return (
    <Fragment>
      <MobileNavigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AppBar
        elevation={0}
        position="fixed"
        className={`${classes.appBar} ${trigger ? classes.addShadow : ''}`}
      >
        <Container>
          <Toolbar className={classes.toolbar}>
            <Hidden mdUp>
              {!menuOpen && (
                <HamburgerIcon
                  onClick={() => setMenuOpen(prev => !prev)}
                  className={classes.menuTrigger}
                />
              )}
            </Hidden>
            <Hidden smDown>
              <nav>
                <NavLinks active={classes.active} className={classes.anchor} />
                <Button variant="contained" size="large" color="secondary">
                  <Link to="contact" smooth={true} spy={true} offset={-150}>
                    Let's Connect
                  </Link>
                </Button>
              </nav>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
}

export default NavBar;
