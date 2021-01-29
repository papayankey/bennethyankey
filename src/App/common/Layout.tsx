// material utils
import { makeStyles, createStyles, Theme } from '@material-ui/core';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(10, 0, 10),
      textAlign: 'center',
      '& > *:not(:last-child)': {
        marginBottom: theme.spacing(4),
      },
    },
  })
);

interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

function Layout(props: LayoutProps) {
  const classes = useStyles();

  const { children, className } = props;

  return <div className={`${classes.container} ${className}`}>{children}</div>;
}

export { Layout };
