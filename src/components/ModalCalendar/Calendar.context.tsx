"use client";
import {
	getDayInfo,
	getDifferenceInDays,
} from "@/components/ModalCalendar/Calendar.utils";
import { createContext, useState } from "react";

interface CalendarContextType {
	isModalOpen: boolean;
	selectedDates: SelectedDatesProps;
	checkin: string;
	checkout: string;
	setIsModalOpen: (isLoading: boolean) => void;
	handleSelectDays: (days: SelectedProps) => void;
	handleCloseModal: () => void;
	handleOpenModal: () => void;
	handleSetCheckin: (item: string) => void;
	handleSetCheckout: (item: string) => void;
}

interface CalendarProviderProps {
	children: React.ReactNode;
}

const initialDates = { startDate: null, endDate: null, differenceInDays: 0 };

export const CalendarContext = createContext<CalendarContextType>({
	isModalOpen: false,
	selectedDates: initialDates,
	checkin: "",
	checkout: "",
	setIsModalOpen: () => {},
	handleSelectDays: () => {},
	handleCloseModal: () => {},
	handleOpenModal: () => {},
	handleSetCheckin: () => {},
	handleSetCheckout: () => {},
});

function toogleBodyOverflowHidden() {
	const elBody = document.querySelector("body");

	if (elBody) {
		elBody.classList.toggle("is-overflow-hidden");
	}
}

export const CalendarProvider = ({ children }: CalendarProviderProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedDates, setSelectedDates] =
		useState<SelectedDatesProps>(initialDates);
	const [checkin, setCheckin] = useState("");
	const [checkout, setCheckout] = useState("");
	const contextValue = {
		isModalOpen,
		setIsModalOpen,
		selectedDates,
		handleSelectDays,
		handleCloseModal,
		handleOpenModal,
		checkin,
		checkout,
		handleSetCheckin,
		handleSetCheckout,
	};

	function handleSetCheckin(item: string) {
		setCheckin(item);
	}

	function handleSetCheckout(item: string) {
		setCheckout(item);
	}

	function handleOpenModal() {
		toogleBodyOverflowHidden();
		setIsModalOpen(true);
	}

	function handleCloseModal() {
		toogleBodyOverflowHidden();
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
