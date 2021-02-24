// material utils
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const audioBars = '/images/audio-bar.svg';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    closeTrigger: {
      color: theme.palette.common.white,
      fontSize: '2.5rem',
    },
    nav: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    navItems: {
      width: 'min-content',
      fontSize: '1.4rem',
      textTransform: 'uppercase',
      letterSpacing: '1.25px',
      fontWeight: 700,
      color: theme.palette.common.white,
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      '&:not(:last-of-type)': {
        marginBottom: theme.spacing(2),
      },
    },
    button: {
      marginTop: 40,
      fontSize: '1.15rem',
    },
    btnTabletSize: {
      width: 300,
    },
    active: {
      fontWeight: 700,
      color: theme.palette.secondary.main,
    },
    audioBar: {
      background: `url(${audioBars})`,
      backgroundPosition: 'bottom center',
      backgroundSize: 100,
      backgroundRepeat: 'repeat no-repeat',
      height: 140,
      marginTop: 20,
      '@media (max-width: 320px)': {
        marginTop: 0,
      },
    },
    backdrop: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height: '100%',
      clipPath: 'circle(0 at 0px 0px)',
      background: `linear-gradient(to bottom, ${theme.palette.primary.main} 90vh, ${theme.palette.secondary.light})`,
      zIndex: 1500,
    },
    animate: {
      animation: '2.5s cubic-bezier(.25, 1, .30, 1) 0.25s $spread both',
    },
    '@keyframes spread': {
      '50%': { clipPath: 'circle(1000px at 0px 0px)' },
      '100%': { clipPath: 'circle(2000px at 0px 0px)' },
    },
    socialContact: {
      '@media (max-width: 320px)': {
        transform: 'translateY(15px)',
      },
    },
  })
);

export { useStyles };
