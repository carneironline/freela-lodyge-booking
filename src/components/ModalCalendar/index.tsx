"use client";

import { useContext } from "react";
import styles from "./Calendar.module.scss";
import { CalendarDateRange } from "./CalendarDateRange";
import { CalendarSchedule } from "./CalendarSchedule";
import { CalendarTop } from "./CalendarTop";
import CloseSVG from "@/assets/images/tag-modal/Close.svg";
import { CalendarContext } from "@/context";

export function ModalCalendar() {
	const { isModalOpen, handleCloseModal } = useContext(CalendarContext);

	function handleClose() {
		handleCloseModal();
	}

	if (!isModalOpen) {
		return null;
	}

	return (
		<div className={styles.container}>
			<CalendarTop />
			<CalendarDateRange />
			<CalendarSchedule />

			<div className={styles.btnClose} onClick={handleClose}>
				<CloseSVG />
			</div>
		</div>
	);
}
