// material components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';

// material utils
import { makeStyles, Theme, createStyles } from '@material-ui/core';

// components
import { Layout } from '../../common';

// data
import { data, IData } from './data';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(10, 0, 0),
    },
    card: {
      backgroundColor: 'transparent',
      padding: theme.spacing(10, 3),
    },
    cardHeader: {
      fontWeight: 700,
    },
    title: {
      color: theme.palette.primary.main,
    },
    cardContent: {
      marginTop: theme.spacing(3),
    },
  })
);

function Skill({ id, media, header, body }: IData) {
  const classes = useStyles();

  return (
    <Grid key={id} item sm={6} md={4}>
      <Card elevation={0} className={classes.card}>
        <CardMedia>{media()}</CardMedia>
        <CardContent>
          <Typography className={classes.cardHeader}>{header}</Typography>
          <Typography className={classes.cardContent}>{body}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

function Skills() {
  const classes = useStyles();

  return (
    <section id="skills">
      <Container>
        <Layout className={classes.container}>
          <Typography variant="h4" className={classes.title}>
            What I can do
          </Typography>
          <Typography>Here are all the services I can offer</Typography>
          <Grid container spacing={5}>
            {data.map(item => (
              <Skill key={item.id} {...item} />
            ))}
          </Grid>
        </Layout>
      </Container>
    </section>
  );
}

export default Skills;
