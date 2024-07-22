export interface ChartOptions {
	colors?: string[];
	chart?: {
		toolbar?: { show: boolean };
		zoom?: { enabled: boolean };
		foreColor?: string;
		fontFamily?: string;
	};
	states?: {
		hover?: { filter: { type: string; value: number } };
		active?: { filter: { type: string; value: number } };
	};
	fill?: {
		opacity?: number;
		gradient?: {
			type: string;
			shadeIntensity: number;
			opacityFrom: number;
			opacityTo: number;
			stops: number[];
		};
	};
	dataLabels?: { enabled: boolean };
	stroke?: { width: number; curve: string; lineCap: string };
	grid?: {
		strokeDashArray: number;
		borderColor: string;
		xaxis: { lines: { show: boolean } };
	};
	xaxis?: { axisBorder: { show: boolean }; axisTicks: { show: boolean } };
	markers?: { size: number; strokeColors: string };
	tooltip?: { theme: boolean; x: { show: boolean } };
	legend?: {
		show: boolean;
		fontSize: number;
		position: string;
		horizontalAlign: string;
		markers: { radius: number };
		fontWeight: number;
		itemMargin: { horizontal: number };
		labels: { colors: string };
	};
	plotOptions?: PlotOptions;
	responsive?: Responsive;
}

interface Label {
	show: boolean;
	label?: string;
	color?: string;
	fontSize?: string;
	fontWeight?: string | number;
	lineHeight?: string;
	offsetY?: number;
}

interface PlotOptions {
	bar?: {
		borderRadius?: number;
		columnWidth?: string;
		borderRadiusApplication?: string;
		borderRadiusWhenStacked?: string;
	};
	pie?: {
		donut?: {
			labels?: {
				show: boolean;
				value?: Label;
				total?: Label;
			};
		};
	};
	radialBar?: {
		track?: {
			strokeWidth: string;
			background: string;
		};
		dataLabels?: {
			value?: Label;
			total?: Label;
		};
	};
	radar?: {
		polygons?: {
			fill?: { colors: string[] };
			strokeColors?: string;
			connectorColors?: string;
		};
	};
	polarArea?: {
		rings?: {
			strokeColor?: string;
		};
		spokes?: {
			connectorColors?: string;
		};
	};
}

interface ResponsiveOption {
  breakpoint: number;
  options: {
    plotOptions?: PlotOptions;
  };
}

type Responsive = ResponsiveOption[];
