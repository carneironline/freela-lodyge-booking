import { Input } from "@/components/Input";
import styles from "./ScheduleInputs.module.scss";
import ClockThreeSVG from "@/assets/icons/clock-three.svg";

export function ScheduleInputs() {
	return (
		<div className={styles.container}>
			<Input placeholder="Entrar" icon={ClockThreeSVG} />
			<Input placeholder="Sair" icon={ClockThreeSVG} />
		</div>
	);
}
