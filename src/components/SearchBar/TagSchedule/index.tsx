import CalendarBlank from "@/assets/icons/calendarBlank.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import styles from "./TagSchedule.module.scss";
import { CalendarContext } from "@/context";
import { useContext } from "react";

export function TagSchedule() {
	const { selectedDates, handleOpenModal } = useContext(CalendarContext);
	const startDate = `${
		selectedDates?.startDate?.day
	} ${selectedDates?.startDate?.monthName.substring(0, 3)} ${
		selectedDates?.startDate?.year
	}`;
	const endDate = `${
		selectedDates?.endDate?.day
	} ${selectedDates?.endDate?.monthName.substring(0, 3)} ${
		selectedDates?.startDate?.year
	}`;

	function handleClick() {
		handleOpenModal();
	}

	return (
		<div className={styles.container} onClick={handleClick}>
			<div className={styles.icon}>
				<CalendarBlank />
			</div>
			<div className={styles.label}>{startDate}</div>
			<div className={styles.icon}>
				<CalendarBlank />
			</div>
			<div className={styles.label}>{endDate}</div>
			<div className={styles.arrow}>
				<ArrowDown />
			</div>
		</div>
	);
}
