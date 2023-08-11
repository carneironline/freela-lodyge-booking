"use client";

import { useContext } from "react";
import { CalendarContext } from "../ModalCalendar/Calendar.context";
import styles from "./MobileFloatInfo.module.scss";
import { isSM } from "@/utils/breakpoint";

export function MobileFloatInfo() {
	const { hasCompleteBookingInfo, handleOpenModal } =
		useContext(CalendarContext);
	const btnLabel = hasCompleteBookingInfo
		? "Reservar meu lody"
		: "Ver disponibilidade";

	function handleClick() {
		hasCompleteBookingInfo ? console.log("Submit Reserve") : handleOpenModal();
	}

	return !isSM() ? null : (
		<div className={styles.container}>
			<div className={styles.fullprice}>
				<div className={styles.label}>Full price</div>
				<div className={styles.price}>
					<span>
						R$ <strong>899</strong>
					</span>
					<span>/noite</span>
				</div>
			</div>
			<div className={styles.btn} onClick={handleClick}>
				{btnLabel}
			</div>
		</div>
	);
}
