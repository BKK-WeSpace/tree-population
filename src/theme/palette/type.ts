type CommonColor = {
	black?: string;
	white?: string;
};

type ColorLevel = {
	main?: string;
	light?: string;
	dark?: string;
	contrastText?: string;
};

type GreyColorLevel = {
	50?: string;
	100?: string;
	200?: string;
	300?: string;
	400?: string;
	500?: string;
	600?: string;
	700?: string;
	800?: string;
	900?: string;
	A100?: string;
	A200?: string;
	A400?: string;
	A700?: string;
	contrastThreshold?: number;
};

type Text = {
	primary: string;
	secondary: string;
	disabled: string;
};

type Background = {
	paper: string;
	default: string;
};

type ActionColor = {
	active?: string;
	hover?: string;
	hoverOpacity?: number;
	selected?: string;
	selectedOpacity?: number;
	disabled?: string;
	disabledBackground?: string;
	disabledOpacity?: number;
	focus?: string;
	focusOpacity?: number;
	activeOpacity?: number;
};

export type {
	CommonColor,
	ColorLevel,
	GreyColorLevel,
	Text,
	Background,
	ActionColor,
};
