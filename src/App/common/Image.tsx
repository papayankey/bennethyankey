// material components
import Card, { CardProps } from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

// material utils
import { makeStyles, createStyles, Theme } from '@material-ui/core';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      cursor: 'pointer',
    },
  })
);

interface ImageProps extends CardProps {
  src: string;
  alt?: string;
  height?: number;
}

function Image(props: ImageProps) {
  const classes = useStyles();
  const { src, alt, height, title, ...restProps } = props;

  return (
    <Card
      elevation={0}
      variant="outlined"
      className={classes.card}
      {...restProps}
    >
      <CardMedia
        component="img"
        alt={alt}
        height={height ?? 225}
        image={src}
        title={title}
      />
    </Card>
  );
}

export { Image };
