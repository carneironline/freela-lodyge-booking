"use client";

import ArrowSvg from "public/assets/icons/calendar-arrow.svg";
import CalendarBlankSvg from "@/assets/icons/calendarBlank.svg";
import { CalendarContext } from "@/context";
import { useContext } from "react";
import styles from "./BookingButtons.module.scss";

export function BookingButtons() {
	const { handleOpenModal } = useContext(CalendarContext);

	function handleOpenModalCalendar() {
		handleOpenModal();
	}

	return (
		<div className={styles.container}>
			<div
				className={`${styles.button} ${styles.startDate}`}
				onClick={handleOpenModalCalendar}
			>
				<div className={`${styles.iconCalendar}`}>
					<CalendarBlankSvg />
				</div>
				<div className={`${styles.text}`}>Entrar</div>
				<div className={`${styles.iconArrow}`}>
					<ArrowSvg />
				</div>
			</div>

			<div
				className={`${styles.button} ${styles.startDate}`}
				onClick={handleOpenModalCalendar}
			>
				<div className={`${styles.iconCalendar}`}>
					<CalendarBlankSvg />
				</div>
				<div className={`${styles.text}`}>Sair</div>
				<div className={`${styles.iconArrow}`}>
					<ArrowSvg />
				</div>
			</div>
		</div>
	);
}
