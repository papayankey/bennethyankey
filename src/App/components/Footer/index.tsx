// material components
import Typography from '@material-ui/core/Typography';

// material utils
import { makeStyles, Theme, createStyles } from '@material-ui/core';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.grey[100],
      padding: theme.spacing(5, 0, 5),
      textAlign: 'center',
      '& > *:not(:last-child)': {
        marginBottom: theme.spacing(4),
      },
    },
  })
);

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h6">Learning, Mentoring & Building</Typography>
    </div>
  );
}

export default Footer;
