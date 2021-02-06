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
import { Image, Layout } from '../../common';

// image
import googleMap from '../../assets/images/google-map.webp';

// styles
const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: theme.palette.primary.main,
  },
  mapGridItem: {
    position: 'relative',
  },
  mapOverlay: {
    height: 200,
    width: '80%',
    position: 'absolute',
    top: 'calc(50% - 100px)',
    left: 'calc(50% - 40%)',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey[800],
    opacity: 0.85,
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
    '& > p': {
      color: theme.palette.common.white,
    },
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <section id="contact">
      <Container>
        <Container maxWidth="md">
          <Layout>
            <Typography variant="h4" className={classes.title}>
              Let's get in touch
            </Typography>
            <Typography>
              I’m always open to discussing project or collaboration
              opportunities.
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
                  width="100%"
                />
              </Grid>
            </Grid>
          </Layout>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
