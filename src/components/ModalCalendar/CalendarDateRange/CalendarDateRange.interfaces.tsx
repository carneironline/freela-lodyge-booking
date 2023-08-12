export interface SelectedProps {
	startDate?: Date | undefined;
	endDate?: Date | undefined;
	key?: string;
	color?: string;
}

export interface DateInfoProps {
	date: Date;
	day: number;
	month: number;
	monthName: string;
	year: number;
	fullDate: string;
}

export interface SelectedDatesProps {
	startDate: DateInfoProps | null;
	endDate: DateInfoProps | null;
	differenceInDays?: number;
}

export interface DateRangeSelectedProps {
	selection: SelectedProps;
}

export interface CalendarDateRangeProps {
	onChange?: (item: SelectedProps) => void;
}
