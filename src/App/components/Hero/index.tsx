// material components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// material icons
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';

// material utils
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px )`,
    marginTop: theme.mixins.toolbar.minHeight + 'px',
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
        <Typography variant="subtitle1">FRONT-END DEVELOPER</Typography>
        <Typography variant="h4">BENNETH YANKEY</Typography>
      </Grid>
      <Grid item className={classes.socialIcons}>
        <FacebookIcon className={classes.icon} />
        <TwitterIcon className={classes.icon} />
        <LinkedIn className={classes.icon} />
      </Grid>
    </Grid>
  );
}

export default Hero;
