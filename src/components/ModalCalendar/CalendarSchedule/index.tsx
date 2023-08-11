import { InfoButton } from "./InfoButton";
import { ScheduleInputs } from "./ScheduleInputs";
import styles from "./CalendarSchedule.module.scss";

export function CalendarSchedule() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>Horários</div>

			<ScheduleInputs />
			{/* <div className={styles.info}>
				<InfoButton />
			</div> */}
		</div>
	);
}
