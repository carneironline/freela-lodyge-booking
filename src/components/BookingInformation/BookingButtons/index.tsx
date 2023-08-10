"use client";

import ArrowSvg from "public/assets/icons/calendar-arrow.svg";
import CalendarBlankSvg from "@/assets/icons/calendarBlank.svg";
import { CalendarContext } from "@/context";
import { useContext } from "react";
import styles from "./BookingButtons.module.scss";
import classNames from "classnames";

export function BookingButtons() {
	const {
		handleOpenModal,
		selectedDates,
		checkin,
		checkout,
		hasCompleteBookingInfo,
	} = useContext(CalendarContext);
	const checkinLabel = hasCompleteBookingInfo ? "Entrada" : "Entrar";
	const checkinTextDatetime =
		hasCompleteBookingInfo &&
		`${selectedDates.startDate?.fullDate} - ${checkin}`;
	const checkoutLabel = hasCompleteBookingInfo ? "Saída" : "Sair";
	const checkoutTextDatetime =
		hasCompleteBookingInfo &&
		`${selectedDates.endDate?.fullDate} - ${checkout}`;
	const classIsHide = classNames({ "is-hide": hasCompleteBookingInfo });

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
				<div className={`${styles.text}`}>
					<div className={`${styles.textLabel}`}>{checkinLabel}</div>
					<div className={`${styles.textDatetime}`}>{checkinTextDatetime}</div>
				</div>
				<div className={`${styles.iconArrow} ${classIsHide}`}>
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
				<div className={`${styles.text}`}>
					<div className={`${styles.textLabel}`}>{checkoutLabel}</div>
					<div className={`${styles.textDatetime}`}>{checkoutTextDatetime}</div>
				</div>
				<div className={`${styles.iconArrow} ${classIsHide}`}>
					<ArrowSvg />
				</div>
			</div>
		</div>
	);
}
