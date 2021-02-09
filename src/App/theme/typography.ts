import { Palette } from '@material-ui/core/styles/createPalette';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

const typography = (palette: Palette): TypographyOptions => ({
  allVariants: {
    fontFamily: 'Quicksand',
  },
  h3: {
    fontWeight: 500,
  },
  h4: {
    fontWeight: 700,
    color: 'rgba(254, 173, 73, 1)',
  },
  body1: {
    fontSize: '1.1rem',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
    },
    fontWeight: 400,
  },
  body2: {
    fontSize: '1rem',
    fontWeight: 400,
  },
  subtitle1: {
    fontWeight: 400,
  },
});

export { typography };
