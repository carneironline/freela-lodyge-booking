"use client";

import { DateRange } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import { addDays } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { CalendarContext } from "@/context";

import "react-date-range/dist/styles.css";
import "./CalendarDateRange.css";

export function CalendarDateRange() {
	const { handleSelectDays } = useContext(CalendarContext);
	const dateToday = new Date();
	const initialRanges = {
		startDate: dateToday,
		endDate: addDays(dateToday, 2),
		key: "selection",
		color: "rgba(233, 224, 209, 0.39)",
	};
	const [state, setState] = useState([initialRanges]);

	function handleSelect(item: DateRangeSelectedProps) {
		console.log("asd");
		setState([item.selection]);
		handleSelectDays(item.selection);
	}

	useEffect(() => {
		handleSelectDays(initialRanges);
	}, []);

	return (
		<div className="calendar-wrap">
			<DateRange
				minDate={dateToday}
				showPreview={false}
				showMonthAndYearPickers={false}
				showSelectionPreview={false}
				moveRangeOnFirstSelection={false}
				months={2}
				ranges={state}
				direction="horizontal"
				locale={locales["pt"]}
				weekStartsOn={0}
				onChange={handleSelect}
			/>
		</div>
	);
}
