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
  button: {
    marginTop: theme.spacing(2),
    letterSpacing: 2,
  },
  divider: {
    marginTop: theme.spacing(8),
  },
}));

function About() {
  const classes = useStyles();

  return (
    <Container>
      <Divider className={classes.divider} />
      <div className={classes.container}>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, veniam
          asperiores accusamus expedita omnis, neque, perspiciatis quo
          doloremque ipsum at nisi distinctio ea ratione culpa cumque quos
          placeat quisquam nostrum.
        </Typography>
        <Button variant="outlined" size="large" className={classes.button}>
          GET RESUME
        </Button>
      </div>
      <Divider />
    </Container>
  );
}

export default About;
