"use client";

import { DateRange, Range, RangeKeyDict } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import { useContext, useEffect, useState } from "react";
import { CalendarContext } from "@/context";

import "react-date-range/dist/styles.css";
import "./CalendarDateRange.css";
import { isSM } from "@/utils/breakpoint";
import { initialRanges, dateToday, getRanges } from "../Calendar.utils";
import { ConfigDateRangeProps } from "./CalendarDateRange.interfaces";

export function CalendarDateRange() {
	const { selectedDates, handleSelectDays } = useContext(CalendarContext);
	const [showMonths, setShowMonths] = useState(2);
	const ranges = getRanges(selectedDates);

	const configDateRange: ConfigDateRangeProps = {
		ranges,
		minDate: dateToday,
		locale: locales["pt"],
		direction: isSM() ? "vertical" : "horizontal",
		scroll: isSM() ? { calendarHeight: 240 } : {},
		weekStartsOn: 0,
		months: showMonths,
		showMonthArrow: isSM() ? false : true,
		showPreview: false,
		showMonthAndYearPickers: false,
		preventSnapRefocus: true,
		onChange: (item): void => {
			handleSelect(item.selection);
		},
	};

	function handleSelect(item: Range): void {
		handleSelectDays(item);
	}

	function Button() {
		const buttonLabel = "Mais datas";

		function handleClick() {
			setShowMonths(showMonths + 2);
		}

		if (!isSM()) return null;

		return (
			<button className="button" onClick={handleClick}>
				{buttonLabel}
			</button>
		);
	}

	useEffect(() => {
		handleSelectDays(initialRanges());
	}, []);

	return !ranges ? null : (
		<div className="calendar-wrap">
			<DateRange {...configDateRange} />

			<Button />
		</div>
	);
}
