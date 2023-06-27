import styles from './home.module.scss'
import DetailTags from '@/components/DetailTags'
import Header from '@/components/Header'
import OfferCard from '@/components/OfferCard'
import Footer from '@/components/Footer'

export default function Home() {

  return (
    <section>
      <Header />
      <DetailTags />
      <section className={styles.offersList}>
        <OfferCard />
        <OfferCard />
      </section>
      <Footer />
    </section>
  )
}
