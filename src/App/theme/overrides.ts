import { createMuiTheme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';

// default theme
const { breakpoints, spacing } = createMuiTheme();

const overrides: Overrides = {
  MuiCssBaseline: {
    '@global': {
      body: {
        margin: '0 !important',
        padding: '0 !important',
        backgroundColor: '#f1fff0',
        color: '#4b200d',
        userSelect: 'none',
      },
    },
  },
  MuiContainer: {
    maxWidthLg: {
      [breakpoints.up('lg')]: {
        padding: 0,
      },
    },
  },
  MuiTextField: {
    root: {
      padding: spacing(1, 0),
    },
  },
  MuiFilledInput: {
    root: {
      backgroundColor: '#fff',
    },
  },
  MuiButton: {
    root: {
      borderRadius: 50,
      fontWeight: 700,
      textTransform: 'capitalize',
    },
  },
};

export { overrides };
