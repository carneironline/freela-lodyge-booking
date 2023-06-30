import Image from 'next/image'
import styles from './LodyDiscovery.module.scss'

import { 
    Jetski,
    Pool,
    Sunset1,
    HouseDeck,
    Beach,
    Sunset2
 } from '@/assets/images'

type LodyDiscoveryType = {
   title: string;
};

const discoveryImgs = [
    Jetski,
    Pool,
    Sunset1,
    HouseDeck,
    Beach,
    Sunset2
]

const LodyDiscovery = ({ title }: LodyDiscoveryType) => {
    return (
        <section className={styles.lodyDiscovery}>
            <h2 className={styles.title}>{title}</h2>
            <section className={styles.relativeContainer}>
                <section className={styles.wrapper}>
                    {discoveryImgs.map(item => (
                        <section className={styles.imgContainer}>
                            <p className={styles.imgTitle}></p>
                            <div className={styles.overlay}></div>
                            <Image className={styles.image} src={item} quality={100} alt={``} />
                        </section>
                    ))}
                </section>
            </section>
        </section>
    )
}

export default LodyDiscovery;