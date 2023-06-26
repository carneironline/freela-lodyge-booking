import DetailTags from '@/components/DetailTags'
import styles from './home.module.scss'
import Header from '@/components/Header'
import OfferCard from '@/components/OfferCard'

export default function Home() {

  return (
    <section>
      <Header />
      <DetailTags />
      <section className={styles.offersList}>
        <OfferCard />
        <OfferCard />
      </section>
    </section>
  )
}
