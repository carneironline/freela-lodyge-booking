import styles from './OfferDetailsHeader.module.scss'
import Image from 'next/image'

import BeachHouse1 from '@/assets/images/beach-house-1.jpg'
import BeachHouse2 from '@/assets/images/beach-house-2.jpg'
import BeachHouse3 from '@/assets/images/beach-house-3.jpg'

import ButtonMorePics from './components/ButtonMorePics'

const OfferDetailsHeader = () => {
    return (
        <section className={styles.offerDetailsHeader}>
            <section className={styles.imgContainer}>
                    <Image className={styles.mainPicture} src={BeachHouse1} alt="beach house" />
                <section className={styles.imagContainerCol2}>
                    <Image className={styles.secondPicture} src={BeachHouse2} alt="beach house" />
                    <section className={styles.thirdPictureContainer}>
                        <div className={styles.overlay}></div>
                        <ButtonMorePics />
                        <Image className={styles.thirdPicture} src={BeachHouse3} alt="beach house" />
                    </section>
                </section>
            </section>
        </section>
    )
}

export default OfferDetailsHeader;