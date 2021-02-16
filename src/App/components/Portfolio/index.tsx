// material components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

// material utils
import { makeStyles, Theme, createStyles } from '@material-ui/core';

// components
import { Layout } from '../../common';
import { Card } from './Card';
import { Link } from 'react-scroll';

// data
import { images as data } from './data';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: {
      backgroundColor: theme.palette.primary.main,
    },
    container: {
      '& > *:not(:last-child)': {
        marginBottom: theme.spacing(4),
      },
    },
    text: {
      color: theme.palette.background.default,
    },
    contactLink: {
      fontWeight: 700,
      marginLeft: theme.spacing(1),
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  })
);

function Portfolio() {
  const classes = useStyles();

  return (
    <section id="portfolio">
      <Layout className={classes.layout}>
        <Container className={classes.container}>
          <Typography variant="h4" className={classes.text}>
            Portfolio
          </Typography>
          <Typography className={classes.text}>
            Here are few projects I have worked on recently. Want to see more?
            <Link
              className={classes.contactLink}
              to="contact"
              smooth={true}
              spy={true}
              offset={200}
            >
              Get in touch
            </Link>
          </Typography>
          <Grid container spacing={3}>
            {data.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                style={{ position: 'relative' }}
              >
                <Card index={index} data={item} />
              </Grid>
            ))}
          </Grid>
          <Button
            href="https://github.com/papayankey"
            target="blank"
            variant="contained"
            size="large"
            color="secondary"
          >
            Get more on github
          </Button>
        </Container>
      </Layout>
    </section>
  );
}

export default Portfolio;
