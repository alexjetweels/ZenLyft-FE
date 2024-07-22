import { TypographyOptions } from '@mui/material/styles/createTypography';
import React from 'react';

declare module '@mui/material/styles' {
  interface CustomTypography extends Typography {
    fontSecondaryFamily: string;
    fontWeightSemiBold: React.CSSProperties['fontWeight'];
  }

  interface CustomTypographyOptions extends TypographyOptions {
    fontSecondaryFamily: string;
    fontWeightSemiBold: React.CSSProperties['fontWeight'];
  }
}
