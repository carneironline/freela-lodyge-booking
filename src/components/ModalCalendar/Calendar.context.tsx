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
	hasCompleteBookingInfo: string;
	setIsModalOpen: (isLoading: boolean) => void;
	handleSelectDays: (days: SelectedProps) => void;
	handleCloseModal: () => void;
	handleOpenModal: () => void;
	handleSetCheckin: (item: string) => void;
	handleSetCheckout: (item: string) => void;
	differenceInDaysText: () => string;
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
	hasCompleteBookingInfo: "",
	setIsModalOpen: () => {},
	handleSelectDays: () => {},
	handleCloseModal: () => {},
	handleOpenModal: () => {},
	handleSetCheckin: () => {},
	handleSetCheckout: () => {},
	differenceInDaysText: () => "",
});

function evtToogleBodyOverflowHidden() {
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
	const hasCompleteBookingInfo =
		!!checkin &&
		!!checkout &&
		!!selectedDates.startDate?.fullDate &&
		!!selectedDates.endDate?.fullDate;

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
		hasCompleteBookingInfo,
		differenceInDaysText,
	};

	function differenceInDaysText() {
		const { differenceInDays } = selectedDates;

		if (!differenceInDays) return "";
		return differenceInDays === 1
			? `${differenceInDays} noite`
			: `${differenceInDays} noites`;
	}

	function handleSetCheckin(item: string) {
		setCheckin(item);
	}

	function handleSetCheckout(item: string) {
		setCheckout(item);
	}

	function handleOpenModal() {
		evtToogleBodyOverflowHidden();
		setIsModalOpen(true);
	}

	function handleCloseModal() {
		evtToogleBodyOverflowHidden();
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
