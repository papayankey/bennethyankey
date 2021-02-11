// react
import React from 'react';

// material components
import Box, { BoxProps } from '@material-ui/core/Box';
import green from '@material-ui/core/colors/green';

// material utils
import { useTheme, makeStyles, createStyles, Theme } from '@material-ui/core';

// styles
// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    level: {
      '&:hover': {
        backgroundColor: green[100],
      },
    },
  })
);
interface TowerProps extends BoxProps {
  bgcolor?: string;
}

interface TowerLevelProps extends BoxProps {
  level: number;
}

function Tower(props: TowerProps) {
  const { children, bgcolor, ...restProps } = props;

  const renderLevels = React.Children.map(children, (child, index) => {
    return React.cloneElement(child as React.ReactElement, {
      bgcolor,
    });
  });

  return (
    <Box display="grid" gridRowGap={5} alignSelf="end" {...restProps}>
      {renderLevels}
    </Box>
  );
}

Tower.Level = function TowerLevel(props: TowerLevelProps) {
  const theme = useTheme();
  let { bgcolor, level, children, ...restProps } = props;

  const classes = useStyles();

  return (
    <Box
      bgcolor={bgcolor ?? theme.palette.primary.light}
      gridRow={`${level + 1}/${level + 2}`}
      className={classes.level}
      {...restProps}
    >
      {children}
    </Box>
  );
};

export { Tower };
