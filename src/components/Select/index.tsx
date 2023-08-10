import { useEffect, useState } from "react";
import classNames from "classnames";
import { Input } from "../Input";
import styles from "./Select.module.scss";
import { OptionProps, SelectProps } from "./Select.interfaces";

export function Select({
	className = "",
	id = "",
	value = "",
	icon: Icon,
	options = [],
	onChange = () => {},
	...rest
}: SelectProps) {
	const [showOptions, setShowOptions] = useState(false);
	const [stateValue, setStateValue] = useState(value);
	const classList = classNames({ "is-open": !!showOptions });
	function handleOpenOptions() {
		setShowOptions(true);
	}

	function handleSelectItem(item: OptionProps) {
		setStateValue(item.name);
		onChange(item);
		setShowOptions(false);
	}

	useEffect(() => {
		setStateValue(value);
	}, [value]);

	return (
		<div className={`${styles.container} ${classList}`}>
			<Input
				id={id}
				icon={Icon}
				value={stateValue}
				{...rest}
				onFocus={handleOpenOptions}
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
