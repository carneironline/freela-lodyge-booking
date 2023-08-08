"use client";

import styles from "./BookingGoNow.module.scss";

export function BookingGoNow() {
	const titleText = "Ir hoje ou Reservar";
	const listItems = [
		{ name: "Fast Check-In", value: "Reservar e ir de imediato" },
		{ name: "Check-out Flexível", value: "Antecipe até 1 dia" },
		{ name: "Cancelamento Grátis", value: "Até 48h antes da Reserva" },
	];
	const btnGoLabel = "Ir agora";

	function handleGoTo() {
		console.log("Go to");
	}

	return (
		<div className={styles.container}>
			<div className={styles.title}>{titleText}</div>

			<ul className={styles.list}>
				{listItems.map((item) => (
					<li className={styles.item} key={item.name}>
						<strong className={styles.name}>{item.name}:</strong>
						<span className={styles.value}>{item.value}</span>
					</li>
				))}
			</ul>

			<div className={styles.btnGo} onClick={handleGoTo}>
				{btnGoLabel}
			</div>
		</div>
	);
}
