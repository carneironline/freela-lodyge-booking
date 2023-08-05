"use client";

import { useContext } from "react";
import Image from "next/image";
import { TagsControlContext } from "@/context";

import DogSVG from "@/assets/images/tag-modal/Dog.svg?url";
import WifiSVG from "@/assets/images/tag-modal/WifiHigh.svg?url";
import Campfire from "@/assets/images/tag-modal/Campfire.svg?url";
import CloseSVG from "@/assets/images/tag-modal/Close.svg?url";

import styles from "./detailtags.module.scss";

function DetailTags() {
	const { isModalOpen, clickHandler } = useContext(TagsControlContext);

	const icons: any = {
		1: DogSVG,
		2: WifiSVG,
		3: Campfire,
	};

	const tags = [
		{
			name: "Lareira Interna",
			active: true,
			icon: 1,
		},
		{
			name: "Banheira de Imersão",
			active: true,
			icon: 2,
		},
		{
			name: "Hidro",
			active: true,
			icon: 3,
		},
		{
			name: "Piscina Externa",
			active: true,
			icon: 1,
		},
		{
			name: "Aquecedor Externo",
			active: true,
			icon: 2,
		},
		{
			name: "Ar-condicionado",
			active: true,
			icon: 3,
		},
		{
			name: "Adega",
			active: true,
			icon: 1,
		},
		{
			name: "Automação",
			active: true,
			icon: 2,
		},
		{
			name: "Sistema Multimídia",
			active: true,
			icon: 3,
		},
		{
			name: "Cozinha Completa",
			active: true,
			icon: 1,
		},
		{
			name: "Deck Aquático",
			active: true,
			icon: 2,
		},
		{
			name: "Deck Molhado",
			active: true,
			icon: 3,
		},
		{
			name: "Espreguiçadeiras",
			active: true,
			icon: 1,
		},
		{
			name: "Jardim Paisagístico",
			active: true,
			icon: 2,
		},
		{
			name: "Lareira Externa",
			active: true,
			icon: 3,
		},
		{
			name: "Jacuzzi",
			active: true,
			icon: 1,
		},
		{
			name: "Piscina de Borda Infinita",
			active: true,
			icon: 1,
		},
		{
			name: "Aquecedor Interno",
			active: true,
			icon: 1,
		},
		{
			name: "Roupas de Cama Premium*",
			active: true,
			icon: 1,
		},
		{
			name: "Toalhas de Piscina Premium*",
			active: true,
			icon: 1,
		},
		{
			name: "Cama King",
			active: true,
			icon: 1,
		},
		{
			name: "Sistema de Som",
			active: true,
			icon: 1,
		},
		{
			name: "Churrasqueira Completa",
			active: true,
			icon: 1,
		},
		{
			name: "Deck Seco",
			active: true,
			icon: 1,
		},
		{
			name: "Food Experience",
			active: true,
			icon: 1,
		},
		{
			name: "Daybed",
			active: true,
			icon: 1,
		},
		{
			name: "Kit Praia",
			active: true,
			icon: 1,
		},
	];

	if (!isModalOpen) return null;

	return (
		<aside className={styles.modalTagsBackdrop}>
			<div className={styles.modalTags}>
				<button className={styles.close} onClick={clickHandler}>
					<Image src={CloseSVG} alt={""} />
				</button>
				<div className={styles.modalColumns}>
					{tags
						.filter((tag) => tag.active)
						.map((tag) => (
							<div className={styles.column}>
								<Image src={icons[tag.icon]} alt={""} />
								<span>{tag.name}</span>
							</div>
						))}
				</div>
			</div>
		</aside>
	);
}

export default DetailTags;
