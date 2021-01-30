// material components
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// material utils
import { makeStyles, Theme, createStyles } from '@material-ui/core';

// components
import { Layout } from '../../common';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: {
      backgroundColor: theme.palette.grey[100],
      padding: theme.spacing(10, 0),
    },
  })
);

function Footer() {
  const classes = useStyles();

  return (
    <Layout className={classes.layout}>
      <Container>
        <Typography variant="h6">Learning, Mentoring & Building</Typography>
      </Container>
    </Layout>
  );
}

export default Footer;
