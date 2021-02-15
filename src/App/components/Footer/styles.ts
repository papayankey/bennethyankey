// material utils
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

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
    socialContacts: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(3),
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

export { useStyles };
