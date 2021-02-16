// react
import { Fragment } from 'react';

// material components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

// material utils
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core';

// components
import { Layout } from '../../common';
import { Link } from 'react-scroll';

// data
import { data, IData } from './data';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(10, 0, 0),
    },
    title: {
      color: theme.palette.primary.main,
    },
    gridContainer: {
      paddingBottom: theme.spacing(10),
      paddingTop: theme.spacing(5),
    },
    card: {
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing(6, 3),
      height: '100%',
    },
    cardMedia: {
      display: 'flex',
      justifyContent: 'center',
    },
    cardContent: {
      padding: 0,
      marginTop: theme.spacing(3),
    },
    cardHeader: {
      fontWeight: 700,
    },
    cardBody: {
      marginTop: theme.spacing(3),
    },
    contact: {
      color: theme.palette.primary.main,
      fontWeight: 700,
      '&:hover': {
        textDecoration: 'underline',
        cursor: 'pointer',
      },
    },
  })
);

function Skill({ id, Icon, header, body }: IData) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid key={id} item sm={6} md={4}>
      <Card variant="outlined" className={classes.card}>
        <CardMedia className={classes.cardMedia}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={80}
            height={80}
            borderRadius={theme.shape.borderRadius + 46}
            bgcolor={theme.palette.primary.main}
            color={theme.palette.common.white}
          >
            <Icon fontSize="large" />
          </Box>
        </CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.cardHeader}>{header}</Typography>
          <Typography className={classes.cardBody}>
            {Array.isArray(body) ? (
              <Fragment>
                {body[0]}
                <Link
                  className={classes.contact}
                  to="contact"
                  smooth={true}
                  spy={true}
                  offset={-50}
                >
                  contact me
                </Link>
                {body[1]}
              </Fragment>
            ) : (
              body
            )}
          </Typography>
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
          <Grid container spacing={5} className={classes.gridContainer}>
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
