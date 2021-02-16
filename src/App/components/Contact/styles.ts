// material utils
import { makeStyles, createStyles, Theme } from '@material-ui/core';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      textAlign: 'center',
    },
    button: {
      marginTop: theme.spacing(4),
    },
    textField: {
      '& .MuiFilledInput-root': {
        outline: `1px solid ${theme.palette.divider}`,
      },
      '& .MuiFilledInput-root:hover, & .MuiFilledInput-root.Mui-focused': {
        backgroundColor: theme.palette.primary.light,
      },
      '& .MuiFilledInput-underline::before': {
        borderBottom: 'none',
      },
    },
    helperText: {
      textAlign: 'left',
      color: '#f44336',
      paddingLeft: theme.spacing(1) + 6,
      paddingRight: theme.spacing(1) + 6,
      minHeight: 22,
      fontSize: '0.9rem',
    },
  })
);

export { useStyles };
