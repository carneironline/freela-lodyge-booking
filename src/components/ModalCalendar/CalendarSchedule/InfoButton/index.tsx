import InfoCircleSvg from "@/assets/icons/info-circle.svg";
import styles from "./InfoButton.module.scss";

export function InfoButton() {
	return (
		<div className={styles.container}>
			<div className={styles.icon}>
				<InfoCircleSvg />
			</div>
			<div className={styles.label}>Saída Flexível</div>
		</div>
	);
}
