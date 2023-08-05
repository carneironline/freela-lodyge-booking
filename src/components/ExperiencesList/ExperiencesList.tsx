import Image from "next/image";
import styles from "./ExperiencesList.module.scss";
import Forest from "@/assets/images/forest.png";

import {
	Bicycle,
	Restaurant,
	Friends,
	Dog,
	Service,
	Wifi,
	Time,
	EasyToUse,
} from "@/assets/icons/orangeIcons";

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
					quality={100}
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
						Mais flexibilidade e Liberdade
						<br /> que um hotel, mais comodidade
						<br /> que um Airbnb
					</h2>
					<p className={styles.subtitle}>
						A Lodyge foi pensada para assumir escolhas inteligentes, você pode
						ditar a liberdade e comodidade que deseja
					</p>
				</div>

				<ul className={styles.experiencesItemsList}>
					<li>
						<div className={styles.experienceItem}>
							<Image src={Restaurant} alt={""} />
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
							<Image src={Bicycle} alt={""} />
							<h4>Experiências Inéditas</h4>
							<p>
								Cada Lody tem uma experiência exclusiva. Chegar de Mountain Bike
								em uma praia paradisíaca ou uma bicicleta aquática? Experimente
								todas.
							</p>
						</div>
					</li>
					<li>
						<div className={styles.experienceItem}>
							<Image src={Dog} alt={""} />
							<h4>Sempre Pet Friendly</h4>
							<p>
								Não precisa nem perguntar. Leve seu doguinho, tem uma cama pra
								ele.
							</p>
						</div>
					</li>
					<li>
						<div className={styles.experienceItem}>
							<Image src={EasyToUse} alt={""} />
							<h4>Check Out Flexível</h4>
							<p>
								Não sabe se quer voltar na segunda ou domingo. Ative o check out
								flexível sem taxas extras.
							</p>
						</div>
					</li>
					<li>
						<div className={styles.experienceItem}>
							<Image src={Service} alt={""} />
							<h4>Serviços Flexíveis</h4>
							<p>
								Você pode solicitar limpeza extra, toalhas novas ou ficar dias
								sem ver ninguém. Your choice.
							</p>
						</div>
					</li>
					<li>
						<div className={styles.experienceItem}>
							<Image src={Friends} alt={""} />
							<h4>Convide Amigos</h4>
							<p>
								É uma Lody para 4 pessoas? Decida se quer ir com o seu alguém,
								sozinho(a) ou invite até 4 amigos sem taxas extras.
							</p>
						</div>
					</li>
					<li>
						<div className={styles.experienceItem}>
							<Image src={Time} alt={""} />
							<h4>Fast Check-in</h4>
							<p>
								Você decidiu ir pra um Lody agora? Se está disponível, apenas
								reserve e vá, não importa se for 3 da manhã.
							</p>
						</div>
					</li>
					<li>
						<div className={styles.experienceItem}>
							<Image src={Wifi} alt={""} />
							<h4>Alta velocidade</h4>
							<p>
								Cada lody tem Starlink e banda larga com no mínimo 100MB de
								velocidade.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default ExperiencesList;
