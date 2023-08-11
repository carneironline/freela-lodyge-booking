"use client";

import { DateRange } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import { addDays } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { CalendarContext } from "@/context";

import "react-date-range/dist/styles.css";
import "./CalendarDateRange.css";
import { isSM } from "@/utils/breakpoint";

export function CalendarDateRange() {
	const { selectedDates, handleSelectDays } = useContext(CalendarContext);
	const [showMonths, setShowMonths] = useState(2);
	const dateToday = new Date();
	const initialRanges = {
		startDate: selectedDates.startDate?.date || dateToday,
		endDate: selectedDates.endDate?.date || addDays(dateToday, 2),
		key: "selection",
		color: "rgba(233, 224, 209, 0.39)",
	};
	const [state, setState] = useState([initialRanges]);

	const config = {
		ranges: state,
		minDate: dateToday,
		locale: locales["pt"],
		direction: isSM() ? "vertical" : "horizontal",
		scroll: isSM() ? { calendarHeight: 240 } : {},
		weekStartsOn: 0,
		months: showMonths,
		showMonthArrow: isSM() ? false : true,
		showPreview: false,
		showSelectionPreview: false,
		showMonthAndYearPickers: false,
		moveRangeOnFirstSelection: false,
		preventSnapRefocus: true,
	};

	function handleSelect(item: DateRangeSelectedProps) {
		setState([item.selection]);
		handleSelectDays(item.selection);
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
		handleSelectDays(initialRanges);
	}, []);

	return (
		<div className="calendar-wrap">
			<DateRange onChange={handleSelect} {...config} />

			<Button />
		</div>
	);
}
