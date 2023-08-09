export function getHourOptions(type: "br" | "us" = "us") {
	return [...Array(24)].map((_, index) => {
		const indexNum = type === "br" ? index : index + 1;
		let hour = `${indexNum}`.padStart(2, "0");
		let name = "";

		if (type === "br") {
			name = `${hour}:00`;
		} else {
			if (index < 12) {
				name = `${hour}:00 AM`;
			} else {
				hour = (indexNum - 12).toString().padStart(2, "0");
				name = `${hour}:00 PM`;
			}
		}

		return {
			name,
			value: name,
		};
	});
}
