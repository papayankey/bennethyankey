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
        '& $overlay': {
          animation: '2.5s cubic-bezier(.25, 1, .30, 1) 0.25s $spread both',
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
      clipPath: 'circle(0 at 0px 0px)',
    },
    '@keyframes spread': {
      '0%': { clipPath: 'circe(400px at 0px 0px)' },
      '50%': { clipPath: 'circle(500px at 0px 0px)' },
      '100%': { clipPath: 'circle(600px at 0px 0px)' },
    },
    summary: {
      marginTop: theme.spacing(1),
    },
    title: {
      fontSize: '1.5rem',
      color: theme.palette.primary.main,
      fontWeight: 700,
    },
    buttons: {
      marginTop: theme.spacing(2),
      opacity: 1,
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

function Card(props: PortfolioCardInterface) {
  const classes = useStyles();

  const { data, index } = props;
  const { title, summary, stack, demo, code } = data;

  return (
    <div className={classes.overlayContainer}>
      <div className={classes.overlay}>
        <Typography variant="h5" className={classes.title}>
          {formatTitle(title)}
        </Typography>
        <Typography variant="body2" className={classes.summary}>
          {summary}
        </Typography>
        <Typography variant="body2" className={classes.stacks}>
          <Typography variant="inherit" component="span">
            Stack Used
          </Typography>
          <Typography variant="inherit" component="span">
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

export { Card };
