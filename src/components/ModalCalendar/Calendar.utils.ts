import { format, getDate, getMonth, differenceInDays } from "date-fns";
import { ptBR } from "date-fns/locale";

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
