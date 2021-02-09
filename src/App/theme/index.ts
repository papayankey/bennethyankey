import { createMuiTheme } from '@material-ui/core';

import { overrides } from './overrides';
import { palette } from './palette';
import { props } from './props';
import { typography } from './typography';

const theme = createMuiTheme({
  palette,
  typography,
  props,
  overrides,
  mixins: {
    toolbar: {
      minHeight: 90,
    },
  },
});

export { theme };
