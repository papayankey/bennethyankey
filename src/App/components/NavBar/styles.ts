// material utils
import { makeStyles, createStyles, Theme } from '@material-ui/core';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.common.white,
    },
    toolbar: {
      justifyContent: 'flex-end',
    },
    menuTrigger: {
      color: theme.palette.grey[800],
      fontSize: '2.5rem',
    },
    anchor: {
      textTransform: 'uppercase',
      letterSpacing: '1.25px',
      cursor: 'pointer',
      color: theme.palette.grey[600],
      fontSize: '1rem',
      fontWeight: 400,
      marginRight: theme.spacing(4),
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
    active: {
      fontWeight: 700,
      color: theme.palette.primary.main,
    },
    addShadow: {
      boxShadow: '0 1px 1px rgba(0,0,0,0.05)',
    },
  })
);

export { useStyles };
