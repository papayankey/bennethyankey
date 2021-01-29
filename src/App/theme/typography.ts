import { Palette } from '@material-ui/core/styles/createPalette';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

const typography = (palette: Palette): TypographyOptions => ({
  h5: {
    fontWeight: 700,
  },
  body1: {
    fontFamily: 'Quicksand',
    color: palette.grey[600],
  },
});

export { typography };
