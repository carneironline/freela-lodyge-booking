import { useEffect, useState } from "react";
import classNames from "classnames";
import { Input } from "../Input";
import styles from "./Select.module.scss";
import { OptionProps, SelectProps } from "./Select.interfaces";
import { isSM } from "@/utils/breakpoint";

export function Select({
	className = "",
	id = "",
	value = "",
	placeholder = "",
	icon: Icon = null,
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

	function handleSelectItem(
		item: OptionProps | React.ChangeEvent<HTMLSelectElement>
	) {
		const data = item.target?.value ? JSON.parse(item.target.value) : item;
		setStateValue(data.name);
		onChange(data);
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
			<div className={`${styles.input} `} onClick={handleOpenOptions}>
				<div className={`${styles.inputLabel} `}>{placeholder}</div>
				<div className={`${styles.inputValue} `}>{stateValue}</div>
				<div className={`${styles.inputIcon} `}>{Icon && <Icon />}</div>
			</div>

			{isSM() && (
				<select
					className={`${styles.select} `}
					onChange={(item) => handleSelectItem(item)}
				>
					{options.map((item) => (
						<option value={JSON.stringify(item)} key={item.value}>
							{item.name}
						</option>
					))}
				</select>
			)}

			{!isSM() && (
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
			)}
		</div>
	);
}
