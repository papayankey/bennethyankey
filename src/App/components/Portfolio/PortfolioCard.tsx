// material components
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// material utils
import { makeStyles, Theme, createStyles, capitalize } from '@material-ui/core';

// components
import { Image } from '../../common';

// data
import { ImageInterface } from './data';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    overlayContainer: {
      position: 'relative',
      overflow: 'hidden',
      boxShadow: theme.shadows[5],
      '&:hover': {
        '& $overlay, & $buttons': {
          opacity: 0.97,
        },
        '& $summary, & $title, & $stacks span': {
          transform: 'translate(0)',
        },
      },
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(0, 3),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.secondary.main,
      opacity: 0,
      transition: theme.transitions.create('opacity', {
        duration: 600,
        easing: theme.transitions.easing.easeInOut,
      }),
    },
    summary: {
      marginTop: theme.spacing(1),
    },
    title: {
      fontSize: '1.5rem',
      color: theme.palette.primary.main,
      fontWeight: 700,
    },
    'position-right': {
      transform: 'translateX(100%)',
      transition: theme.transitions.create('transform', {
        duration: 500,
        easing: theme.transitions.easing.easeInOut,
      }),
    },
    'position-left': {
      transform: 'translateX(-100%)',
      transition: theme.transitions.create('transform', {
        duration: 500,
        easing: theme.transitions.easing.easeInOut,
      }),
    },
    buttons: {
      marginTop: theme.spacing(2),
      opacity: 0,
      transition: theme.transitions.create('opacity', {
        duration: 500,
        easing: theme.transitions.easing.easeInOut,
      }),
      '& .MuiButton-contained': {
        fontWeight: 700,
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.background.default,
        },
        '&:first-child': {
          marginRight: theme.spacing(2),
        },
      },
    },
    stacks: {
      marginTop: theme.spacing(1.5),
      color: theme.palette.background.default,
      '& > span': {
        display: 'block',
        fontWeight: 700,
      },
      '& span:first-child': {
        color: theme.palette.primary.main,
      },
    },
  })
);

function formatTitle(value: string) {
  const isHyphenated = /-/g.test(value);
  if (isHyphenated) {
    return value
      .split('-')
      .map(str => capitalize(str))
      .join(' ');
  }
  return capitalize(value);
}

interface PortfolioCardInterface {
  index: number;
  data: ImageInterface;
}

function PortfolioCard(props: PortfolioCardInterface) {
  const { data, index } = props;
  const classes = useStyles();

  const { title, summary, stack, demo, code } = data;

  return (
    <div className={classes.overlayContainer}>
      <div className={classes.overlay}>
        <Typography
          variant="h5"
          className={`${classes.title} ${classes['position-right']}`}
        >
          {formatTitle(title)}
        </Typography>
        <Typography
          variant="body2"
          className={`${classes.summary} ${classes['position-left']}`}
        >
          {summary}
        </Typography>
        <Typography variant="body2" className={classes.stacks}>
          <Typography
            variant="inherit"
            component="span"
            className={classes['position-right']}
          >
            Stack Used
          </Typography>
          <Typography
            variant="inherit"
            component="span"
            className={classes['position-left']}
          >
            {stack}
          </Typography>
        </Typography>
        <div className={classes.buttons}>
          <Button
            href={demo}
            target="blank"
            variant="contained"
            size="large"
            color="secondary"
          >
            Demo
          </Button>
          <Button
            href={code}
            target="blank"
            variant="contained"
            size="large"
            color="secondary"
          >
            Code
          </Button>
        </div>
      </div>
      <Image key={index} {...data} height={250} />
    </div>
  );
}

export { PortfolioCard };
