import { TypeBackground } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypeBackground {
    neutral: string;
  }

  interface Palette {
    background: TypeBackground;
  }
  interface PaletteOptions {
    background: TypeBackground;
  }
}
