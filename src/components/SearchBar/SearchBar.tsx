"use client";

import Button from "../Button";
import CheckboxButton from "./components/CheckboxButton";

import Mountain from "@/assets/icons/mountains.png";
import Sunset from "@/assets/icons/sunset.png";

import styles from "./searchbar.module.scss";
import { TagSchedule } from "./TagSchedule";

const SearchBar = () => {
	function handleSearch() {
		console.log("search");
	}

	return (
		<section className={styles.searchBar}>
			<section className={styles.inputs}>
				<CheckboxButton Icon={Mountain} type="primary">
					Montanhas
				</CheckboxButton>
				<CheckboxButton Icon={Sunset} type="secondary">
					Litoral
				</CheckboxButton>

				<TagSchedule />
			</section>

			<Button onClick={handleSearch}> Buscar meu lody </Button>
		</section>
	);
};

export default SearchBar;
