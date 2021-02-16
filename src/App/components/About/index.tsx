// react
// material components
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

// material utils
import { makeStyles, Theme } from '@material-ui/core';

// styles
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(10, 0),
    textAlign: 'center',
    margin: '0 auto',
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
  },
  title: {
    color: theme.palette.primary.main,
  },
  button: {
    marginTop: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(8),
  },
}));

function About() {
  const classes = useStyles();

  return (
    <section id="about">
      <Container>
        <Container maxWidth="md">
          <div className={classes.container}>
            <Typography variant="h4" className={classes.title}>
              About Me
            </Typography>
            <Typography>
              Hi, I'm Benneth Yankey, a self-thought frontend or React Developer
              and a high school Biology teacher from Ghana. I have experience in
              software development and an open-source contributor. My language
              of choice is JavaScript and Typescript.
            </Typography>
            <Typography>
              I'm very enthusiastic and passionate about what I do, very time
              conscious and work all heart out to deliver products. I'm open to
              collaborations and love to learn and work with all developers at
              any level.
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className={classes.button}
            >
              Get Resume
            </Button>
          </div>
        </Container>
        <Divider />
      </Container>
    </section>
  );
}

export default About;
