// material components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// material icons
import LocationOnIcon from '@material-ui/icons/LocationOnOutlined';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import CallIcon from '@material-ui/icons/CallOutlined';

// material utils
import { makeStyles, Theme } from '@material-ui/core';

// components
import { Form } from './Form';
import { Image } from '../../common';

// image
import googleMap from '../../assets/images/google-map.png';

// styles
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(10, 0, 10),
    textAlign: 'center',
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(4),
    },
  },
  mapGridItem: {
    position: 'relative',
  },
  mapOverlay: {
    width: 400,
    height: 200,
    position: 'absolute',
    top: 'calc(50% - 100px)',
    left: 'calc(50% - 200px)',
    backgroundColor: theme.palette.grey[800],
    opacity: 0.8,
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayContent: {
    display: 'flex',
    flexDirection: 'column',
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
  overlayText: {
    textAlign: 'left',
    marginLeft: theme.spacing(3),
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container>
        <Typography variant="h5">Interested in what you see?</Typography>
        <Typography>
          I’m always open to discussing project or collaboration opportunities
        </Typography>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <Form />
          </Grid>
          <Grid item md={6} className={classes.mapGridItem}>
            <div className={classes.mapOverlay}>
              <div className={classes.overlayContent}>
                <LocationOnIcon />
                <EmailIcon />
                <CallIcon />
              </div>
              <div
                className={`${classes.overlayContent} ${classes.overlayText}`}
              >
                <Typography>Koforidua - Ghana</Typography>
                <Typography>yankeybenneth@gmail.com</Typography>
                <Typography>+233 500 083 455</Typography>
              </div>
            </div>
            <Image
              src={googleMap}
              alt="google map"
              title="google map"
              height={400}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Contact;
