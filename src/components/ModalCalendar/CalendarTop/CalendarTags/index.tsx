import React, { useContext } from "react";
import { addDays, subDays, eachWeekendOfInterval } from "date-fns";
import TagClock from "@/assets/icons/tag-clock.svg";
import TagMoon from "@/assets/icons/tag-moon.svg";
import styles from "./CalendarTags.module.scss";
import { CalendarContext } from "../../Calendar.context";
import classNames from "classnames";
import {
	dateToday,
	getDateThisNight,
	nextWeekenDays,
} from "../../Calendar.utils";

interface TagProps {
	label: string;
	icon: React.ElementType;
	startDate: Date;
	endDate: Date;
	isActive: boolean;
}

export function CalendarTags() {
	const { handleSelectDays, clearCheckinCheckout } =
		useContext(CalendarContext);

	const initialTags: TagProps[] = [
		{
			label: "Esta noite",
			icon: TagClock,
			startDate: dateToday,
			endDate: getDateThisNight(),
			isActive: false,
		},
		{
			label: "Próximo fim de semana",
			icon: TagMoon,
			startDate: nextWeekenDays.startDate,
			endDate: nextWeekenDays.endDate,
			isActive: false,
		},
	];
	const [tags, setTags] = React.useState<TagProps[]>(initialTags);

	function handleClick(tag: TagProps) {
		const { startDate, endDate } = tag;
		const newTags = tags.map((item) => ({
			...item,
			isActive: tag.label === item.label ? !item.isActive : false,
		}));

		handleSelectDays({ startDate, endDate });
		setTags(newTags);
		clearCheckinCheckout();
	}

	return (
		<div className={styles.tags}>
			{tags.map((tag) => {
				const classIsActive = classNames({ "is-active": tag.isActive });

				return (
					<div
						className={`${styles.tag} ${classIsActive}`}
						key={tag.label}
						onClick={() => handleClick(tag)}
					>
						<div className={styles.tagIcon}>
							<tag.icon />
						</div>
						<div className={styles.tagLabel}>{tag.label}</div>
					</div>
				);
			})}
		</div>
	);
}
