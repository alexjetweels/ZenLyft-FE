import { useMemo } from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider, Theme, ThemeOptions } from '@mui/material/styles';

import { ExtendedPalette, palette } from './palette';
import { shadows } from './shadows';
import { overrides } from './overrides';
import { ExtendedTypography, typography } from './typography';
import { CustomShadows, customShadows } from './custom-shadows';

// ----------------------------------------------------------------------
interface ExtendedThemeOptions extends ThemeOptions {
	palette: ExtendedPalette,
	typography: ExtendedTypography,
	customShadows: CustomShadows
}

export interface CustomTheme extends Theme {
	palette: ExtendedPalette,
	typography: ExtendedTypography,
	customShadows: CustomShadows
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	
	const memoizedValue: ExtendedThemeOptions = useMemo(
		() => ({
			palette: palette(),
			typography,
			shadows: shadows(),
			customShadows: customShadows(),
			shape: { borderRadius: 8 },
		}),
		[]
	);

	const customTheme: CustomTheme = createTheme({...memoizedValue}) as CustomTheme;

	customTheme.components = overrides(customTheme);

	return (
		<MUIThemeProvider theme={customTheme}>
			<CssBaseline />
			{children}
		</MUIThemeProvider>
	);
}

ThemeProvider.propTypes = {
	children: PropTypes.node,
};
