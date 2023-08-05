import { BookingButtons } from "./BookingButtons";
import styles from "./BookingInformation.module.scss";

export function BookingInformation() {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.topLabel}>Full Price:</div>
				<div className={styles.topText}>
					R$ <strong>899</strong> /noite
				</div>
			</div>

			<BookingButtons />

			<div className={styles.info}></div>
		</div>
	);
}
