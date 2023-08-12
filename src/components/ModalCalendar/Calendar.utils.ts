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

export const dateToday = new Date();
export const nextWeekenDays = getNextWeekenDays();
export const initialRanges = {
	startDate: dateToday,
	endDate: addDays(dateToday, 2),
	key: "selection",
	color: "rgba(233, 224, 209, 0.39)",
};

export function getDayInfo(dateItem: Date) {
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

export function getDifferenceInDays(endDate: Date, startDate: Date) {
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
