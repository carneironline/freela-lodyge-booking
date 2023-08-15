"use client";
import {
	initialRanges,
	getDayInfo,
	getDifferenceInDays,
	setCalendarStorage,
	calendarStorage,
} from "@/components/ModalCalendar/Calendar.utils";
import { createContext, useEffect, useState } from "react";
import {
	SelectedDatesProps,
	SelectedProps,
} from "./CalendarDateRange/CalendarDateRange.interfaces";

interface CalendarContextType {
	isModalOpen: boolean;
	selectedDates: SelectedDatesProps;
	checkin: string;
	checkout: string;
	hasCompleteBookingInfo: boolean;
	showSchedule: boolean;
	setIsModalOpen: (isLoading: boolean) => void;
	setShowSchedule: (isShow: boolean) => void;
	handleSelectDays: (days: SelectedProps) => void;
	handleCloseModal: () => void;
	handleOpenModal: () => void;
	handleSetCheckin: (item: string) => void;
	handleSetCheckout: (item: string) => void;
	differenceInDaysText: () => string;
	clearCheckinCheckout: () => void;
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
	hasCompleteBookingInfo: false,
	showSchedule: false,
	setShowSchedule: () => {},
	setIsModalOpen: () => {},
	handleSelectDays: () => {},
	handleCloseModal: () => {},
	handleOpenModal: () => {},
	handleSetCheckin: () => {},
	handleSetCheckout: () => {},
	clearCheckinCheckout: () => {},
	differenceInDaysText: () => "",
});

function evtToogleBodyOverflowHidden(isActive = false) {
	const elBody = document.querySelector("body");
	const classHidden = "is-overflow-hidden";

	if (elBody && isActive) {
		elBody.classList.add(classHidden);
	}
	if (elBody && !isActive) {
		elBody.classList.remove(classHidden);
	}
}

export const CalendarProvider = ({ children }: CalendarProviderProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [showSchedule, setShowSchedule] = useState(false);
	const [selectedDates, setSelectedDates] =
		useState<SelectedDatesProps>(initialDates);
	const [checkin, setCheckin] = useState(calendarStorage().checkin || "");
	const [checkout, setCheckout] = useState(calendarStorage().checkout || "");

	const hasCompleteBookingInfo =
		!!checkin &&
		!!checkout &&
		!!calendarStorage().startDate?.fullDate &&
		!!calendarStorage().endDate?.fullDate;

	const contextValue = {
		isModalOpen,
		setIsModalOpen,
		showSchedule,
		setShowSchedule,
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
		clearCheckinCheckout,
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

	function clearCheckinCheckout() {
		setCheckin("");
		setCheckout("");
	}

	function handleOpenModal() {
		evtToogleBodyOverflowHidden(true);
		setIsModalOpen(true);
	}

	function handleCloseModal() {
		evtToogleBodyOverflowHidden();
		setIsModalOpen(false);
	}

	function handleSelectDays(days: SelectedProps): void {
		const { startDate, endDate } = days;
		const start = getDayInfo(startDate);
		const end = getDayInfo(endDate);
		let dates = null;

		if (startDate === endDate) {
			dates = { ...initialDates, startDate: start };
		} else {
			dates = {
				startDate: start,
				endDate: end,
				differenceInDays: getDifferenceInDays(endDate, startDate),
			};

			setCalendarStorage({ ...dates });
		}

		setSelectedDates(dates);
	}

	function checkHasCompleteBookingInfo() {
		if (hasCompleteBookingInfo) {
			setCalendarStorage({ ...calendarStorage(), checkin, checkout });
			handleCloseModal();
			setShowSchedule(false);
		}
	}

	useEffect(() => {
		handleSelectDays(initialRanges());
	}, []);

	useEffect(() => {
		checkHasCompleteBookingInfo();
	}, [hasCompleteBookingInfo, checkin, checkout]);

	return (
		<CalendarContext.Provider value={contextValue}>
			{children}
		</CalendarContext.Provider>
	);
};
