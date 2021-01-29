// material components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

// material utils
import { makeStyles, Theme, createStyles } from '@material-ui/core';

// components
import { Image, Layout } from '../../common';

// data
import { images as imageData } from './data';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(10, 0),
      backgroundColor: theme.palette.grey[100],
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(10),
      },
    },
    imageContainer: {
      position: 'relative',
      // '&:hover $overlay': {
      //   visibility: 'visible',
      // },
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      opacity: 0.98,
      transform: 'scaleY(0.9) scaleX(0.95)',
      [theme.breakpoints.up('sm')]: {
        transform: 'scaleY(0.9) scaleX(0.93)',
      },
      visibility: 'hidden',
    },
  })
);

function Portfolio() {
  const classes = useStyles();

  return (
    <Layout className={classes.container}>
      <Typography variant="h5">My Recent Works</Typography>
      <Typography>
        Here are few projects I have worked on recently. Want to see more? Get
        in touch
      </Typography>
      <Grid container spacing={3}>
        {imageData.map((data, i) => (
          <Grid item xs={12} sm={6} md={4} className={classes.imageContainer}>
            <div className={classes.overlay} />
            <Image key={i} {...data} />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" size="large">
        Get more on github
      </Button>
    </Layout>
  );
}

export default Portfolio;
