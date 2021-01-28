import { Palette } from '@material-ui/core/styles/createPalette';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

const typography = (palette: Palette): TypographyOptions => ({
  allVariants: {
    fontFamily: 'Quicksand',
  },
  h1: {
    fontWeight: 700,
  },
});

export { typography };
