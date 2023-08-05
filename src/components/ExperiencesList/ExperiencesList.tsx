import Image from "next/image";
import styles from "./ExperiencesList.module.scss";
import Forest from "@/assets/images/forest.png";
import Dog from "@/assets/images/tag-modal/Dog.svg?url";

const ExperiencesList = () => {
	return (
		<section className={styles.experienceList}>
			<div className={styles.bannerImage}>
				<h3>
					Experiências
					<br /> & comodidades
				</h3>
				<Image
					src={Forest}
					alt={""}
					style={{
						objectFit: "cover",
						position: "relative",
						width: "100%",
						height: "100%",
						borderRadius: 12,
					}}
				/>
			</div>
			<div className={styles.secondCol}>
				<div>
					<h2 className={styles.title}>
						Mais flexibilidade e Liberdade que um hotel, mais comodidade que um
						Airbnb
					</h2>
					<p className={styles.subtitle}>
						A Lodyge foi pensada para assumir escolhas inteligentes, você pode
						ditar a liberdade e comodidade que deseja
					</p>
				</div>

				<ul className={styles.experiencesItemsList}>
					<li>
						<div className={styles.experienceItem}>
							<Image src={Dog} alt={""} />
							<h4>Food Experience</h4>
							<p>
								Tenha acesso a refeições rápidas, bebidas e vinhos espetaculares
								ou traga o seu de sua casa. Quer cozinhar algo especial? Você
								decide.
							</p>
						</div>
					</li>
					<li>
						<div className={styles.experienceItem}>
							<Image src={Dog} alt={""} />
							<h4>Food Experience</h4>
							<p>
								Tenha acesso a refeições rápidas, bebidas e vinhos espetaculares
								ou traga o seu de sua casa. Quer cozinhar algo especial? Você
								decide.
							</p>
						</div>
					</li>
					<li>
						<div className={styles.experienceItem}>
							<Image src={Dog} alt={""} />
							<h4>Food Experience</h4>
							<p>
								Tenha acesso a refeições rápidas, bebidas e vinhos espetaculares
								ou traga o seu de sua casa. Quer cozinhar algo especial? Você
								decide.
							</p>
						</div>
					</li>
					<li>
						<div className={styles.experienceItem}>
							<Image src={Dog} alt={""} />
							<h4>Food Experience</h4>
							<p>
								Tenha acesso a refeições rápidas, bebidas e vinhos espetaculares
								ou traga o seu de sua casa. Quer cozinhar algo especial? Você
								decide.
							</p>
						</div>
					</li>
					<li>
						<div className={styles.experienceItem}>
							<Image src={Dog} alt={""} />
							<h4>Food Experience</h4>
							<p>
								Tenha acesso a refeições rápidas, bebidas e vinhos espetaculares
								ou traga o seu de sua casa. Quer cozinhar algo especial? Você
								decide.
							</p>
						</div>
					</li>
					<li>
						<div className={styles.experienceItem}>
							<Image src={Dog} alt={""} />
							<h4>Food Experience</h4>
							<p>
								Tenha acesso a refeições rápidas, bebidas e vinhos espetaculares
								ou traga o seu de sua casa. Quer cozinhar algo especial? Você
								decide.
							</p>
						</div>
					</li>
					<li>
						<div className={styles.experienceItem}>
							<Image src={Dog} alt={""} />
							<h4>Food Experience</h4>
							<p>
								Tenha acesso a refeições rápidas, bebidas e vinhos espetaculares
								ou traga o seu de sua casa. Quer cozinhar algo especial? Você
								decide.
							</p>
						</div>
					</li>
					<li>
						<div className={styles.experienceItem}>
							<Image src={Dog} alt={""} />
							<h4>Food Experience</h4>
							<p>
								Tenha acesso a refeições rápidas, bebidas e vinhos espetaculares
								ou traga o seu de sua casa. Quer cozinhar algo especial? Você
								decide.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default ExperiencesList;
