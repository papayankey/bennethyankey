// material components
import Typography from '@material-ui/core/Typography';

// material utils
import { makeStyles, Theme, createStyles } from '@material-ui/core';

// components
import { Layout } from '../../common';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: {
      backgroundColor: theme.palette.grey[100],
      padding: theme.spacing(5, 0, 5),
    },
  })
);

function Footer() {
  const classes = useStyles();

  return (
    <Layout className={classes.layout}>
      <Typography variant="h6">Learning, Mentoring & Building</Typography>
    </Layout>
  );
}

export default Footer;
