import { useContext } from "react";
import { CalendarContext } from "@/context";
import styles from "./CalendarTop.module.scss";

export function CalendarTop() {
	const { selectedDates } = useContext(CalendarContext);
	const differenceInDays = selectedDates.differenceInDays;
	const differenceInDaysText = differenceInDays === 1 ? "noite" : "noites";
	const from = selectedDates.startDate?.fullDate || "";
	const to = selectedDates.endDate?.fullDate || "";
	const separator = to ? "-" : "";

	return (
		<div className={styles.container}>
			<div className={styles.date}>
				<div className={styles.days}>
					<div className={styles.daysNumber}>{differenceInDays}</div>
					<div className={styles.daysText}>{differenceInDaysText}</div>
				</div>

				<div className={styles.period}>
					<div className={styles.from}>{from}</div>
					<div className={styles.separator}>{separator}</div>
					<div className={styles.to}>{to}</div>
				</div>
			</div>

			<div className={styles.tags}></div>
		</div>
	);
}
