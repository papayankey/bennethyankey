// react
import React, { Fragment } from 'react';

// material components
import Typography from '@material-ui/core/Typography';

// material utils
import { makeStyles, Theme, createStyles } from '@material-ui/core';

// components
import { Image } from '../../common';

// data
import { ImageInterface } from './data';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContent: {
      marginTop: theme.spacing(3),
    },
    cardTitle: {
      fontWeight: 'bold',
    },
  })
);

interface PortfolioCardInterface {
  index: number;
  data: ImageInterface;
}

function PortfolioCard(props: PortfolioCardInterface) {
  const classes = useStyles();

  const { data, index } = props;

  return (
    <Fragment>
      <Image key={index} {...data} />
      <div className={classes.cardContent}>
        <Typography className={classes.cardTitle}>{data.title}</Typography>
      </div>
    </Fragment>
  );
}

export { PortfolioCard };
