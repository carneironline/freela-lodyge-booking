interface SelectedProps {
	startDate: Date;
	endDate: Date;
	key?: string;
	color?: string;
}

interface DateInfoProps {
	date: Date;
	day: number;
	month: number;
	monthName: string;
	year: number;
	fullDate: string;
}

interface SelectedDatesProps {
	startDate: DateInfoProps | null;
	endDate: DateInfoProps | null;
	differenceInDays?: number;
}

interface DateRangeSelectedProps {
	selection: SelectedProps;
}

interface CalendarDateRangeProps {
	onChange?: (item: SelectedProps) => void;
}
