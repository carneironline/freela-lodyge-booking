import styles from "./ScheduleInputs.module.scss";
import ClockThreeSVG from "@/assets/icons/clock-three.svg";
import { Select } from "@/components/Select";
import { getHourOptions } from "@/utils/time";
import { OptionProps } from "@/components/Select/Select.interfaces";
import { CalendarContext } from "@/context";
import { useContext } from "react";

export function ScheduleInputs() {
	const { handleSetCheckin, handleSetCheckout } = useContext(CalendarContext);
	const options = getHourOptions("br");

	function handleChange(itemOption: OptionProps, inputId: string) {
		if (inputId === "checkin") {
			handleSetCheckin(itemOption.value);
		} else {
			handleSetCheckout(itemOption.value);
		}
	}

	return (
		<div className={styles.container}>
			<Select
				placeholder="Entrar"
				id="checkin"
				icon={ClockThreeSVG}
				options={options}
				onChange={(itemOption) => handleChange(itemOption, "checkin")}
			/>
			<Select
				placeholder="Sair"
				id="checkout"
				icon={ClockThreeSVG}
				options={options}
				onChange={(itemOption) => handleChange(itemOption, "checkout")}
			/>
		</div>
	);
}
