// material components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';

// components
import {
  makeStyles,
  createStyles,
  Theme,
  useScrollTrigger,
} from '@material-ui/core';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.background.default,
    },
    toolbar: {
      padding: theme.spacing(5, 0),
      justifyContent: 'center',
      '& a': {
        color: 'black',
        fontSize: '1rem',
        letterSpacing: '1.25px',
        '&:not(:last-of-type)': {
          marginRight: theme.spacing(4),
        },
      },
    },
  })
);

function NavBar() {
  const classes = useStyles();
  const scrollTrigger = useScrollTrigger({ threshold: 0 });

  return (
    <AppBar
      elevation={scrollTrigger ? 1 : 0}
      position="fixed"
      className={classes.appBar}
    >
      <Container>
        <Toolbar className={classes.toolbar}>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#contact">Contact</Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
