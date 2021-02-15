// react
import { Fragment } from 'react';

// material components
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// components
import { Layout, SocialContact } from '../../common';

// styles
import { useStyles } from './styles';

// date published
const published = 2021;

function Footer() {
  const currentYear = new Date().getFullYear();
  const isGreater = currentYear > published;

  const classes = useStyles();

  return (
    <footer>
      <Layout className={classes.layout}>
        <Container>
          <Typography className={classes.slogan}>
            Learning, Mentoring & Building
          </Typography>
          <div className={classes.socialContacts}>
            <SocialContact />
          </div>
          <div className={classes.footnote}>
            <Typography>Handcrafted by me</Typography>
            <Typography>
              Made with{' '}
              <Typography
                component="a"
                href="https://reactjs.org/"
                target="blank"
              >
                React
              </Typography>{' '}
              &{' '}
              <Typography
                component="a"
                href="https://material-ui.com/"
                target="blank"
              >
                Material-UI
              </Typography>
            </Typography>
            <Typography>
              &copy;Copyright {published}{' '}
              {isGreater && <Fragment>&ndash;</Fragment>}{' '}
              {isGreater && `${currentYear}`}{' '}
              {isGreater ? ':' : <Fragment>&mdash;</Fragment>} Benneth Yankey
            </Typography>
          </div>
        </Container>
      </Layout>
    </footer>
  );
}

export default Footer;
