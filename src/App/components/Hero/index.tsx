// material components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// material utils
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontWeight: 700,
  },
  subtitle: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: '1.3rem',
  },
  hero: {
    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    marginTop: theme.mixins.toolbar.minHeight,
  },
  socialIcons: {
    padding: theme.spacing(2, 0),
  },
  icon: {
    fontSize: 32,
    '&:not(:last-of-type)': {
      marginRight: theme.spacing(3),
    },
  },
}));

function Hero() {
  const classes = useStyles();

  return (
    <section id="home">
      <Container>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          className={classes.hero}
        >
          <Grid item></Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography variant="subtitle1" className={classes.subtitle}>
              FRONT-END DEVELOPER
            </Typography>
            <Typography variant="h3" className={classes.title}>
              BENNETH YANKEY
            </Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Hero;
