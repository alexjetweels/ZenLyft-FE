import React from 'react';

import { TypographyOptions } from '@mui/material/styles/createTypography';

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
