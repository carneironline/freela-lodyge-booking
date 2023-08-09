import { useState } from "react";
import classNames from "classnames";
import { Input } from "../Input";
import styles from "./Select.module.scss";
import { OptionProps, SelectProps } from "./Select.interfaces";

export function Select({
	className = "",
	id = "",
	icon: Icon,
	options = [],
	onChange = () => {},
	...rest
}: SelectProps) {
	const [showOptions, setShowOptions] = useState(false);
	const [value, setValue] = useState("");
	const classList = classNames({ "is-open": !!showOptions });

	function handleOpenOptions() {
		setShowOptions(true);
	}

	function handleSelectItem(item: OptionProps) {
		setValue(item.name);
		onChange(item);
		setShowOptions(false);
	}

	return (
		<div className={`${styles.container} ${classList}`}>
			<Input
				id={id}
				icon={Icon}
				defaultValue={value}
				{...rest}
				onClick={handleOpenOptions}
			/>

			<div className={styles.list}>
				{options.map((item) => (
					<div
						className={styles.item}
						key={item.value}
						onClick={() => handleSelectItem(item)}
					>
						{item.name}
					</div>
				))}
			</div>
		</div>
	);
}
