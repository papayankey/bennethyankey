// material components
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// material utils
import { makeStyles, Theme } from '@material-ui/core';

// components
import { Form } from './Form';
import { Layout } from '../../common';

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
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.9,
    color: theme.palette.text.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
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
    <section id="contact">
      <Container>
        <Container maxWidth="sm">
          <Layout>
            <Typography variant="h4" className={classes.title}>
              Got a project for me?
            </Typography>
            <Typography>
              I'd love to hear from you, if you'd like a quote, or more
              information about working with me, please fill out the form, and I
              will respond as soon as possible!
            </Typography>
            <Form />
          </Layout>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
