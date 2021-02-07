// react
import { Fragment } from 'react';

// material components
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';

// material icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';

// material utils
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

// components
import { Layout } from '../../common';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.default,
      padding: theme.spacing(10, 0),
    },
    slogan: {
      fontWeight: 700,
    },
    githubIcon: {
      fontSize: '1.8rem',
    },
    socialContacts: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(3),
    },
    iconButton: {
      cursor: 'pointer',
      color: theme.palette.background.default,
      '&:not(:last-child)': {
        marginRight: theme.spacing(0.25),
      },
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
      },
    },
    footnote: {
      marginTop: theme.spacing(3),
      '& > *': {
        fontSize: '1rem',
      },
      '& a': {
        fontSize: '1rem',
        textDecoration: 'none',
        color: theme.palette.background.default,
        fontWeight: 700,
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  })
);

// portfolio published year
const published = 2021;

function Footer() {
  const currentYear = new Date().getFullYear();
  const isGreater = currentYear > published;

  const classes = useStyles();

  return (
    <footer>
      <Layout className={classes.layout}>
        <Container>
          true
          <Typography className={classes.slogan}>
            Learning, Mentoring & Building
          </Typography>
          <div className={classes.socialContacts}>
            <IconButton className={classes.iconButton} aria-label="github icon">
              <GithubIcon className={classes.githubIcon} />
            </IconButton>
            <IconButton
              className={classes.iconButton}
              aria-label="linkedin icon"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              className={classes.iconButton}
              aria-label="instagram icon"
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton
              className={classes.iconButton}
              aria-label="telegram icon"
            >
              <TelegramIcon fontSize="large" />
            </IconButton>
          </div>
          <div className={classes.footnote}>
            <Typography>Handcrafted by me</Typography>
            <Typography>
              Made with{' '}
              <Typography component="a" href="#">
                React
              </Typography>{' '}
              &{' '}
              <Typography component="a" href="#">
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
