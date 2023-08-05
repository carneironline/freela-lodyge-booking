"use client";
import {
	getDayInfo,
	getDifferenceInDays,
} from "@/components/ModalCalendar/Calendar.utils";
import { createContext, useState } from "react";

interface CalendarContextType {
	isModalOpen: boolean;
	selectedDates: SelectedDatesProps;
	setIsModalOpen: (isLoading: boolean) => void;
	handleSelectDays: (days: SelectedProps) => void;
	handleCloseModal: () => void;
}

interface CalendarProviderProps {
	children: React.ReactNode;
}

const initialDates = { startDate: null, endDate: null, differenceInDays: 0 };

export const CalendarContext = createContext<CalendarContextType>({
	isModalOpen: false,
	selectedDates: initialDates,
	setIsModalOpen: () => {},
	handleSelectDays: () => {},
	handleCloseModal: () => {},
});

export const CalendarProvider = ({ children }: CalendarProviderProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedDates, setSelectedDates] =
		useState<SelectedDatesProps>(initialDates);
	const contextValue = {
		isModalOpen,
		setIsModalOpen,
		selectedDates,
		handleSelectDays,
		handleCloseModal,
	};

	function handleCloseModal() {
		setIsModalOpen(false);
	}

	function handleSelectDays(days: SelectedProps) {
		const { startDate, endDate } = days;

		const start = getDayInfo(startDate);
		const end = getDayInfo(endDate);

		if (startDate === endDate) {
			setSelectedDates({ ...initialDates, startDate: start });
		} else {
			setSelectedDates({
				startDate: start,
				endDate: end,
				differenceInDays: getDifferenceInDays(endDate, startDate),
			});
		}
	}

	return (
		<CalendarContext.Provider value={contextValue}>
			{children}
		</CalendarContext.Provider>
	);
};
