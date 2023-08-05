import styles from "./offerDetails.module.scss";
import Image from "next/image";
import {
	Menu,
	Footer,
	OfferDetailsHeader,
	UserInterestBadge,
	LodyDiscovery,
	LearnMoreCard,
	PlayerModal,
} from "@/components";
import ChevronDownBlue from "@/assets/icons/chevron-down-blue.svg";
import arrowRight from "@/assets/icons/arrow-right.svg";
import ImportantToKnow from "@/components/ImportantToKnow";
import { ModalCalendar } from "@/components/ModalCalendar";
import { BookingInformation } from "@/components/BookingInformation";

const OfferDetails = () => {
	return (
		<section>
			<ModalCalendar />
			<Menu />
			<section className={styles.header}>
				<div className={styles.titleContainer}>
					<div className={styles.title}>
						<h1>Lody Angra</h1>
					</div>
					<UserInterestBadge />
				</div>
				<p className={styles.subtitle}>
					<span className={styles.location}>Angra dos Reis,</span> Rio de
					Janeiro, Brasil · Apenas 2 horas de você
				</p>
			</section>
			<OfferDetailsHeader />

			<section className={styles.content}>
				<main className={styles.mainContent}>
					<article className={styles.articleBody}>
						<input
							type="checkbox"
							className={styles.readMoreState}
							id="post-2"
						/>

						<p className={styles.readMoreWrap}>
							A Lody Descoberta se revela no coração da mata de Angra dos Reis,
							como uma joia para casais que buscam requinte e tranquilidade.
							Destaque para a cama King size, incrivelmente confortável e
							estrategicamente posicionada sob um teto de vidro. Deitados ali,
							os hóspedes podem admirar um céu estrelado e a copa das árvores.
							No exterior, o encanto se estende a uma piscina de borda infinita,
							perfeita para dias ensolarados. Ali também se encontra um
							convidativo daybed, ideal para relaxar enquanto se aprecia a
							exuberância do jardim. Um caminho serpenteia até um deck
							posicionado sobre um canal de águas límpidas e cristalinas, onde
							uma surpresa aguarda os visitantes. A lareira externa é o cenário
							perfeito para o fim do dia, oferecendo a possibilidade de se
							aquecer enquanto se delicia com a vista. A Lody Descoberta se
							revela no coração da mata de Angra dos Reis, como uma joia para
							casais que buscam requinte e tranquilidade. Destaque para a cama
							King size, incrivelmente confortável e estrategicamente
							posicionada sob um teto de vidro. Deitados ali, os hóspedes podem
							admirar um céu estrelado e a copa das árvores. No exterior, o
							encanto se estende a uma piscina de borda infinita, perfeita para
							dias ensolarados. Ali também se encontra um convidativo daybed,
							ideal para relaxar enquanto se aprecia a exuberância do jardim. Um
							caminho serpenteia até um deck posicionado sobre um canal de águas
							límpidas e cristalinas, onde uma surpresa aguarda os visitantes. A
							lareira externa é o cenário perfeito para o fim do dia, oferecendo
							a possibilidade de se aquecer enquanto se delicia com a vista.
						</p>

						<label htmlFor="post-2" className={styles.readMoreTrigger}>
							Leia Mais <Image src={ChevronDownBlue} alt="Seta para baixo" />
						</label>
					</article>

					<LearnMoreCard
						title="O que é o Check-Out Flexível? "
						description="Todas as reservas tem checkout-Flexível. Você não sabe ainda se quer ficar até domingo ou extender um pouco para segunda-feira? Deixe para decidir no dia. Você pode finalizar seu checkout até 24 hrs antes da data de saída e te devolvemos 1 diária."
					/>
					<LodyDiscovery title="Experiências Reais da Lody Descoberta" />

					<section className={styles.lodyDiscoveryGuide}>
						<h2 className={styles.guideTitle}>Guia Lody Descoberta</h2>
						<p className={styles.guideText}>
							Preparamos um guia de comidas, lugares e experiências da Lody
							Descoberta para você aproveitar cada segundo nesse fantástico
							lugar.
						</p>
						<a href="#" className={styles.guideButton}>
							Ver Guia Lodyge <Image src={arrowRight} alt="Seta para direita" />
						</a>
					</section>

					<ImportantToKnow />
				</main>
				<aside className={styles.sidebar}>
					<BookingInformation />
				</aside>
			</section>

			<Footer />

			<PlayerModal />
		</section>
	);
};

export default OfferDetails;
