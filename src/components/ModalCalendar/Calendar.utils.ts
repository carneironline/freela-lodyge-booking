import en from "@/locales/en";
import {
	format,
	getDate,
	getMonth,
	getYear,
	differenceInDays,
	addDays,
	subDays,
	eachWeekendOfInterval,
} from "date-fns";

import { ptBR } from "date-fns/locale";
import { SelectedDatesProps } from "./CalendarDateRange/CalendarDateRange.interfaces";

const calendarStorageName = "calendar-selections";
export function calendarStorage() {
	return localStorage.getItem(calendarStorageName)
		? JSON.parse(localStorage.getItem(calendarStorageName) || "")
		: "";
}

export function setCalendarStorage(obj: object) {
	localStorage.setItem(
		calendarStorageName,
		calendarStorage()
			? JSON.stringify({ ...calendarStorage(), ...obj })
			: JSON.stringify(obj)
	);
}

export const dateToday = new Date();
export const nextWeekenDays = getNextWeekenDays();
export function initialDates() {
	const data = { startDate: null, endDate: null, differenceInDays: 0 };

	return calendarStorage().startDate?.date
		? {
				startDate: new Date(calendarStorage().startDate?.date),
				endDate: new Date(calendarStorage().endDate?.date),
				differenceInDays: calendarStorage().differenceInDays,
		  }
		: data;
}
export function initialRanges() {
	const data = {
		startDate: dateToday,
		endDate: addDays(dateToday, 2),
		key: "selection",
		color: "rgba(233, 224, 209, 0.39)",
	};

	const obj = calendarStorage().startDate?.date
		? {
				...data,
				startDate: new Date(calendarStorage().startDate?.date),
				endDate: new Date(calendarStorage().endDate?.date),
		  }
		: data;

	return obj;
}

export function getDayInfo(dateItem: Date = initialRanges().startDate) {
	const date = dateItem;
	const day = getDate(date);
	const month = getMonth(date) + 1;
	const monthName = format(date, "LLLL", { locale: ptBR });
	const year = getYear(date);
	const fullDate = `${day} de ${monthName}`;
	const fullDateWithYear = `${day} de ${monthName} de ${year}`;

	return {
		date,
		day,
		month,
		monthName,
		year,
		fullDate,
		fullDateWithYear,
	};
}

export function getDifferenceInDays(
	endDate: Date = initialRanges().startDate,
	startDate: Date = initialRanges().endDate
) {
	return differenceInDays(endDate, startDate);
}

export function getDateThisNight() {
	return addDays(dateToday, 1);
}

function getNextWeekenDays() {
	const nextStartDay = addDays(dateToday, 7);
	const nextEndDay = addDays(nextStartDay, 7);

	const daysNextWeekWeekend = eachWeekendOfInterval({
		start: nextStartDay,
		end: nextEndDay,
	});
	const dateStartNextWeekend = subDays(daysNextWeekWeekend[0], 1);
	const dateEndNextWeekend = addDays(dateStartNextWeekend, 2);

	return { startDate: dateStartNextWeekend, endDate: dateEndNextWeekend };
}

export function getRanges(selectedDates: SelectedDatesProps | null = null) {
	if (selectedDates?.startDate) {
		return [
			{
				...initialRanges(),
				startDate: selectedDates.startDate?.date,
				endDate: selectedDates.endDate?.date,
			},
		];
	} else {
		return null;
	}
}
