import styles from "./home.module.scss";
import DetailTags from "@/components/DetailTags";
import Header from "@/components/Header";
import OfferCard from "@/components/OfferCard";
import Footer from "@/components/Footer";
import ExperiencesList from "@/components/ExperiencesList";
import MiddleMosaic from "@/components/MiddleMosaic/MiddleMosaic";

import {
	Lody2Offer1,
	Lody2Offer2,
	Lody2Offer3,
	LodyOffer1,
	LodyOffer2,
	LodyOffer3,
} from "@/assets/images";

export default function Home() {
	return (
		<section>
			<Header />
			<DetailTags />
			<section className={styles.offersList} id="lodys">
				<OfferCard
					title="Lody Descoberta"
					subtitle="Angra dos Reis, apenas 2 horas de você"
					image1={LodyOffer1}
					image2={LodyOffer2}
					image3={LodyOffer3}
				/>
				<OfferCard
					title="Lody Horizonte"
					subtitle="Serra das Araras, apenas 2 horas de você"
					image1={Lody2Offer1}
					image2={Lody2Offer2}
					image3={Lody2Offer3}
				/>
			</section>
			<MiddleMosaic />
			<ExperiencesList />
			<Footer />
		</section>
	);
}
