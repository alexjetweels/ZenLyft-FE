import { alpha } from '@mui/material/styles';
import { Color, Palette, TypeAction, createTheme, TypeBackground } from '@mui/material';

// ----------------------------------------------------------------------

// SETUP COLORS
interface ExtendedColor extends Color {
  0: string;
}
export const grey: ExtendedColor = {
  0: '#FFFFFF',
  50: '#F9FAFB',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  A100: '#000000', // Placeholder, as grey typically does not have accent colors
  A200: '#000000', // Placeholder
  A400: '#000000', // Placeholder
  A700: '#000000', // Placeholder
};

export type ExtendedPaletteColor = {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
};

export const primary: ExtendedPaletteColor = {
  lighter: '#D0ECFE',
  light: '#73BAFB',
  main: '#1877F2',
  dark: '#0C44AE',
  darker: '#042174',
  contrastText: '#FFFFFF',
};

export const secondary: ExtendedPaletteColor = {
  lighter: '#EFD6FF',
  light: '#C684FF',
  main: '#8E33FF',
  dark: '#5119B7',
  darker: '#27097A',
  contrastText: '#FFFFFF',
};

export const info: ExtendedPaletteColor = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

export const success: ExtendedPaletteColor = {
  lighter: '#C8FAD6',
  light: '#5BE49B',
  main: '#00A76F',
  dark: '#007867',
  darker: '#004B50',
  contrastText: '#FFFFFF',
};

export const warning: ExtendedPaletteColor = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: grey[800],
};

export const error: ExtendedPaletteColor = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

export const common = {
  black: '#000000',
  white: '#FFFFFF',
};

export const action: TypeAction = {
  ...createTheme().palette.action,
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  ...createTheme().palette,
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(grey[500], 0.2),
  action,
};

// ----------------------------------------------------------------------

// Extend TypeBackground to include the neutral property
interface ExtendedTypeBackground extends TypeBackground {
  neutral: string;
}

// Use ExtendedTypeBackground in your custom Palette type
export interface ExtendedPalette extends Palette {
  primary: ExtendedPaletteColor,
  secondary: ExtendedPaletteColor,
  info: ExtendedPaletteColor,
  success: ExtendedPaletteColor,
  warning: ExtendedPaletteColor,
  error: ExtendedPaletteColor,
  background: ExtendedTypeBackground;
}

export function palette() : ExtendedPalette {
  return {
    ...base,
    mode: 'light',
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: '#FFFFFF',
      default: grey[100],
      neutral: grey[200],
    },
    action: {
      ...base.action,
      active: grey[600],
    },
  };
}
