// material components
import Container from '@material-ui/core/Container';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

// material utils
import { useTheme, useMediaQuery } from '@material-ui/core';

// components
import { NavLinks, SocialContact } from '../../../common';
import { Link } from 'react-scroll';

// styles
import { useStyles } from './styles';

interface MobileProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileNavigation(props: MobileProps) {
  const { menuOpen, setMenuOpen } = props;
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();

  return (
    <Box
      position={menuOpen ? 'fixed' : ''}
      display={menuOpen ? 'block' : 'none'}
      className={`${classes.backdrop} ${menuOpen ? classes.animate : ''}`}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Container style={{ flex: 1 }}>
          <Grid
            container
            direction="column"
            justify="space-between"
            style={{ height: '100%', textAlign: 'center' }}
          >
            <Grid
              item
              style={{ marginTop: 24, marginRight: 16, textAlign: 'right' }}
            >
              <CloseIcon
                onClick={() => setMenuOpen(prev => !prev)}
                className={classes.closeTrigger}
              />
            </Grid>
            <Grid item>
              <nav className={classes.nav}>
                <NavLinks
                  active={classes.active}
                  className={classes.navItems}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                />
                <Button
                  variant="contained"
                  fullWidth={menuOpen && !isSmUp}
                  size="large"
                  color="secondary"
                  className={`${classes.button} ${
                    isSmUp ? classes.btnTabletSize : ''
                  }`}
                >
                  <Link
                    to="contact"
                    smooth={true}
                    spy={true}
                    offset={-150}
                    onClick={() => setMenuOpen(prev => !prev)}
                  >
                    Let's Connect
                  </Link>
                </Button>
              </nav>
            </Grid>
            <Grid item className={classes.socialContact}>
              <SocialContact />
            </Grid>
          </Grid>
        </Container>
        <div className={classes.audioBar} />
      </Box>
    </Box>
  );
}

export { MobileNavigation };
