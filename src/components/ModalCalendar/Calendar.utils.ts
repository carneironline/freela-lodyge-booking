import en from "@/locales/en";
import {
	format,
	getDate,
	getMonth,
	differenceInDays,
	addDays,
	subDays,
	eachWeekendOfInterval,
} from "date-fns";

import { ptBR } from "date-fns/locale";

export const dateToday = new Date();
export const nextWeekenDays = getNextWeekenDays();

export function getDayInfo(dateItem: Date) {
	const date = dateItem;
	const day = getDate(dateItem);
	const month = getMonth(dateItem) + 1;
	const monthName = format(dateItem, "LLLL", { locale: ptBR });
	const fullDate = `${day} de ${monthName}`;

	return {
		date,
		day,
		month,
		monthName,
		fullDate,
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
