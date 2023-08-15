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
	const listId = `${id}Select`;

	function handleOpenOptions() {
		setShowOptions(true);
	}

	function handleSelectItem(item: OptionProps) {
		setStateValue(item.name);
		onChange(item);
		setShowOptions(false);
	}

	function setListPosition() {
		const list = document.getElementById(listId);

		if (!isInViewport(list)) list?.classList.add(`${styles.isBottom}`);
	}

	function isInViewport(element: HTMLElement | null) {
		const viewportHeight = window.innerHeight;
		const rect = element?.getBoundingClientRect() || { top: 0 };
		const position = element ? rect?.top + element?.clientHeight : 0;

		return position < viewportHeight ? true : false;
	}

	useEffect(() => {
		setListPosition();
	}, []);

	useEffect(() => {
		setStateValue(value);
	}, [value]);

	return (
		<div className={`${styles.container} ${classList} `}>
			<Input
				id={id}
				icon={Icon}
				value={stateValue}
				{...rest}
				onFocus={handleOpenOptions}
			/>

			<div id={listId} className={`${styles.list} `}>
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
