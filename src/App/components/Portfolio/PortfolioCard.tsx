// material components
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// material utils
import { makeStyles, Theme, createStyles } from '@material-ui/core';

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
      '&:hover': {
        '& $overlay, & $buttons': {
          opacity: 0.98,
        },
        '& $summary, & $title': {
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
      backgroundColor: theme.palette.grey['700'],
      opacity: 0,
      transition: theme.transitions.create('opacity', {
        duration: 600,
        easing: theme.transitions.easing.easeInOut,
      }),
      '& *': {
        color: theme.palette.common.white,
      },
    },
    summary: {
      marginTop: theme.spacing(1),
      transform: 'translateX(-100%)',
      transition: theme.transitions.create('transform', {
        duration: 500,
        easing: theme.transitions.easing.easeInOut,
      }),
    },
    title: {
      transform: 'translateX(100%)',
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
      '& .MuiButton-outlined': {
        borderRadius: 0,
        border: `1px solid ${theme.palette.common.white}`,
        '&:first-child': {
          marginRight: theme.spacing(2),
          backgroundColor: theme.palette.common.white,
          '& *': {
            color: theme.palette.grey['700'],
          },
          '&:hover': {
            backgroundColor: theme.palette.grey['700'],
            '& *': {
              color: theme.palette.common.white,
            },
          },
        },
        '&:hover': {
          backgroundColor: theme.palette.common.white,
          '& *': {
            color: theme.palette.grey['700'],
          },
        },
      },
    },
  })
);

interface PortfolioCardInterface {
  index: number;
  data: ImageInterface;
}

function PortfolioCard(props: PortfolioCardInterface) {
  const { data, index } = props;
  const classes = useStyles();

  const { title, summary } = data;

  return (
    <div className={classes.overlayContainer}>
      <div className={classes.overlay}>
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.summary}>{summary}</Typography>
        <div className={classes.buttons}>
          <Button variant="outlined" size="medium">
            Demo
          </Button>
          <Button variant="outlined" size="medium">
            Code
          </Button>
        </div>
      </div>
      <Image key={index} {...data} />
    </div>
  );
}

export { PortfolioCard };
