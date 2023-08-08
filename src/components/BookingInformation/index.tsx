"use client";

import { BookingButtons } from "./BookingButtons";
import { BookingGoNow } from "./BookingGoNow";
import styles from "./BookingInformation.module.scss";

export function BookingInformation() {
	const btnReserveLabel = "Realizar minha reserva";
	const boxOrCenterText = "or";

	function handleReserve() {
		console.log("Reserve");
	}

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.topLabel}>Full Price:</div>
				<div className={styles.topText}>
					R$ <strong>899</strong> /noite
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
