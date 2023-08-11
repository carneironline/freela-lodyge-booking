"use client";

import { useContext } from "react";
import { BookingButtons } from "./BookingButtons";
import { BookingGoNow } from "./BookingGoNow";
import { CalendarContext } from "../ModalCalendar/Calendar.context";
import styles from "./BookingInformation.module.scss";

export function BookingInformation() {
	const { differenceInDaysText, hasCompleteBookingInfo, handleOpenModal } =
		useContext(CalendarContext);
	const btnReserveLabel = hasCompleteBookingInfo
		? "Realizar minha reserva"
		: "Ver disponibilidade";
	const boxOrCenterText = "ou";

	function handleReserve() {
		hasCompleteBookingInfo ? console.log("Submit Reserve") : handleOpenModal();
	}

	function FullPrice() {
		const price = 899;

		return !differenceInDaysText() ? null : (
			<>
				<strong>{differenceInDaysText()}</strong> | R$ <strong>{price}</strong>
			</>
		);
	}

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.topLabel}>Full Price:</div>
				<div className={styles.topText}>
					<FullPrice />
				</div>
			</div>

			<BookingButtons />

			<div className={styles.btnReserve} onClick={handleReserve}>
				{btnReserveLabel}
			</div>

			<div className={styles.boxOr}>
				<div className={styles.boxOrLine}></div>
				<div className={styles.boxOrCenter}>{boxOrCenterText}</div>
				<div className={styles.boxOrLine}></div>
			</div>

			<BookingGoNow />
		</div>
	);
}
