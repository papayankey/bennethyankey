// material components
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// material utils
import { makeStyles, Theme } from '@material-ui/core';

// svg
import AudioBar from '../../assets/audio-bar.svg';

// styles
const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    marginTop: theme.mixins.toolbar.minHeight,
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    fontWeight: 700,
    color: theme.palette.grey[800],
  },
  subtitle: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: '1.3rem',
  },
  audioBar: {
    background: `url(${AudioBar})`,
    backgroundPosition: 'bottom center',
    backgroundSize: 100,
    backgroundRepeat: 'repeat no-repeat',
    height: 140,
  },
}));

function Hero() {
  const classes = useStyles();

  return (
    <section id="home">
      <div className={classes.hero}>
        <div />
        <Container className={classes.container}>
          <Typography variant="subtitle1" className={classes.subtitle}>
            FRONT-END DEVELOPER
          </Typography>
          <Typography variant="h3" className={classes.title}>
            BENNETH YANKEY
          </Typography>
        </Container>
        <div className={classes.audioBar} />
      </div>
    </section>
  );
}

export default Hero;
