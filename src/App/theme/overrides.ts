import { createMuiTheme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';

// default theme
const { spacing } = createMuiTheme();

const overrides: Overrides = {
  MuiCssBaseline: {
    '@global': {
      body: {
        margin: '0 !important',
        padding: '0 !important',
        backgroundColor: '#f1fff0',
        color: '#4b200d',
        userSelect: 'none',
        overflowX: 'hidden',
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
