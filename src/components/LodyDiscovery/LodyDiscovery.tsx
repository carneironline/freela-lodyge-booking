import Image from 'next/image'
import styles from './LodyDiscovery.module.scss'

import { 
    LodyDiscovery1,
    LodyDiscovery2,
    LodyDiscovery3,
    LodyDiscovery4,
    LodyDiscovery5,
    LodyDiscovery6,
    LodyDiscovery7,
    LodyDiscovery8,
 } from '@/assets/images'

type LodyDiscoveryType = {
   title: string;
};

const discoveryImgs = [
    {
        image: LodyDiscovery1,
        title: "Deck do Canal"
    },
    {
        image: LodyDiscovery2,
        title: "Bicicleta Aquática"
    },
    {
        image: LodyDiscovery3,
        title: "Lareira Externa"
    },
    {
        image: LodyDiscovery4,
        title: "Vista da Cama"
    },
    {
        image: LodyDiscovery5,
        title: "Sunset View"
    },
    {
        image: LodyDiscovery6,
        title: "Piscina Hijau"
    },
    {
        image: LodyDiscovery7,
        title: "Daybed"
    },
    {
        image: LodyDiscovery8,
        title: "Jardim Paisagístico"
    },
]

const LodyDiscovery = ({ title }: LodyDiscoveryType) => {
    return (
        <section className={styles.lodyDiscovery}>
            <h2 className={styles.title}>{title}</h2>
            <section className={styles.relativeContainer}>
                <section className={styles.wrapper}>
                    {discoveryImgs.map(item => (
                        <section className={styles.imgContainer}>
                            <p className={styles.imgTitle}>{item.title}</p>
                            <div className={styles.overlay}></div>
                            <Image className={styles.image} src={item.image} quality={100} alt={``} />
                        </section>
                    ))}
                </section>
            </section>
        </section>
    )
}

export default LodyDiscovery;