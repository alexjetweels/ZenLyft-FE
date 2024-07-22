import { Icon, InlineIcon, getIcon } from '@iconify/react';
import { IconifyIcon } from '@iconify/types';
import { Box, SxProps, Theme } from '@mui/material';

interface IconifyProps {
	icon: IconifyIcon | string;
	width?: string | number;
	height?: string | number;
	color?: string;
	inline?: boolean;
	sx?: SxProps<Theme>;
}

const Iconify: React.FC<IconifyProps> = ({ icon, width = 20, height = 20, color = 'currentColor', inline = false, sx }) => {
	let iconObject: IconifyIcon;

	if (typeof icon === 'string') {
		const iconObjectNullable = getIcon(icon);
		if (!iconObjectNullable) {
			console.error(`Iconify: icon '${icon}' not found.`);
			return null;
		}
		iconObject = iconObjectNullable;
	} else {
		iconObject = icon;
	}	

	return inline ? (
		<Box className="component-iconify" sx={{ width, height, ...sx }}>
			<InlineIcon icon={iconObject} width={width} height={height} color={color} />
		</Box>
	) : (
		<Box className="component-iconify" sx={{ width, height, ...sx }}>
			<Icon icon={iconObject} width={width} height={height} color={color} />
		</Box>
	);
}

export default Iconify;