// react
import { Fragment } from 'react';

// material components
import IconButton from '@material-ui/core/IconButton';

// material icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';

// material utils
import { makeStyles, Theme, createStyles } from '@material-ui/core';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
      cursor: 'pointer',
      color: theme.palette.common.white,
      '&:not(:last-child)': {
        marginRight: theme.spacing(0.25),
      },
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
      },
    },
  })
);

function SocialContact() {
  const classes = useStyles();

  return (
    <Fragment>
      <IconButton
        href="https://github.com/papayankey"
        target="blank"
        className={classes.iconButton}
        aria-label="github icon"
      >
        <GithubIcon fontSize="large" style={{ fontSize: '1.8rem' }} />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/benneth-yankey-23201232/"
        target="blank"
        className={classes.iconButton}
        aria-label="linkedin icon"
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>
      <IconButton
        href="https://instagram.com/papayankey_"
        target="blank"
        className={classes.iconButton}
        aria-label="instagram icon"
      >
        <InstagramIcon fontSize="large" />
      </IconButton>
      <IconButton
        href="https://t.me/papa_yankey"
        target="blank"
        className={classes.iconButton}
        aria-label="telegram icon"
      >
        <TelegramIcon fontSize="large" />
      </IconButton>
    </Fragment>
  );
}

export { SocialContact };
