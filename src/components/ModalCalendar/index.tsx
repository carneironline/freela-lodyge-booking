"use client";

import { useContext, useState } from "react";
import { CalendarDateRange } from "./CalendarDateRange";
import { CalendarSchedule } from "./CalendarSchedule";
import { CalendarTop } from "./CalendarTop";
import CloseSVG from "@/assets/images/tag-modal/Close.svg";
import { CalendarContext } from "@/context";
import { isSM } from "@/utils/breakpoint";
import styles from "./ModalCalendar.module.scss";

export function ModalCalendar() {
	const { isModalOpen, handleCloseModal } = useContext(CalendarContext);
	const [showSchedule, setShowSchedule] = useState(false);
	const classShowSchedule = showSchedule ? "show-schedule" : "";

	function BtnClose() {
		function handleClose() {
			handleCloseModal();
		}

		return (
			<div className={styles.btnClose} onClick={handleClose}>
				<CloseSVG />
			</div>
		);
	}

	function BtnGoToSchedule() {
		const btnGoToLabel = "Ir para horários";

		function handleClose() {
			setShowSchedule(true);
		}

		return (
			<div className={styles.BtnGoToSchedule}>
				<div className={styles.BtnGoTo} onClick={handleClose}>
					{btnGoToLabel}
				</div>
			</div>
		);
	}

	if (!isModalOpen) {
		return null;
	}

	return (
		<div className={`${styles.container} ${classShowSchedule}`}>
			<div className={styles.top}>
				<CalendarTop />
			</div>
			<div className={styles.daterange}>
				<CalendarDateRange />
			</div>

			<div className={styles.schedule}>
				<CalendarSchedule />
			</div>

			{!isSM() ? null : <BtnGoToSchedule />}

			<BtnClose />
		</div>
	);
}
