// material components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

// material utils
import { makeStyles, Theme, createStyles } from '@material-ui/core';

// components
import { Layout } from '../../common';
import { PortfolioCard } from './PortfolioCard';

// data
import { images as data } from './data';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: {
      backgroundColor: theme.palette.grey[100],
    },
    container: {
      '& > *:not(:last-child)': {
        marginBottom: theme.spacing(4),
      },
    },
  })
);

function Portfolio() {
  const classes = useStyles();

  return (
    <Layout className={classes.layout}>
      <Container className={classes.container}>
        <Typography variant="h5">My Recent Works</Typography>
        <Typography>
          Here are few projects I have worked on recently. Want to see more? Get
          in touch
        </Typography>
        <Grid container spacing={3}>
          {data.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <PortfolioCard index={index} data={item} />
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" size="large">
          Get more on github
        </Button>
      </Container>
    </Layout>
  );
}

export default Portfolio;
