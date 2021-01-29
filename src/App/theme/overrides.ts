import { Overrides } from '@material-ui/core/styles/overrides';

const overrides: Overrides = {
  MuiCssBaseline: {
    '@global': {
      body: {
        margin: '0 !important',
        padding: '0 !important',
      },
    },
  },
  MuiContainer: {
    maxWidthLg: {
      '@media (min-width: 960px)': {
        padding: 0,
      },
    },
  },
  MuiTextField: {
    root: {
      padding: '10px 0',
    },
  },
  MuiButton: {
    root: {
      textTransform: 'capitalize',
    },
  },
};

export { overrides };
