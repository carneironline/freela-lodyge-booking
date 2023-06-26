"use client";

import { useContext } from 'react'
import Image from 'next/image'
import UserInterestBadge from './components/UserInterestBadge'
import { TagsControlContext } from '@/context'

import BeachHouse1 from '@/assets/images/beach-house-1.jpg' 
import BeachHouse2 from '@/assets/images/beach-house-2.jpg' 
import BeachHouse3 from '@/assets/images/beach-house-3.jpg'
import CallBell from '@/assets/icons/tagsWhite/CallBell.svg'
import Campfire from '@/assets/icons/tagsWhite/Campfire.svg'
import Garage from '@/assets/icons/tagsWhite/Garage.svg'
import Dog from '@/assets/icons/tagsWhite/Dog.svg'
import ExternalLinkIcon from '@/assets/icons/arrow-up-right.svg'

import styles from './OfferCard.module.scss'

const OfferCard = () => {

    const { clickHandler } = useContext(TagsControlContext)

    const icons = [
        CallBell,
        Campfire,
        Garage,
        Dog,
    ]

    return (
        <section className={styles.cardContainer}>
            <section className={styles.imgContainer}>
                <UserInterestBadge />
                <section>
                    <Image className={styles.mainPicture} src={BeachHouse1} alt="beach house" />
                </section>
                <section className={styles.imagContainerCol2}>
                    <section className={styles.secondaryImgsContainer}>
                        <Image className={styles.secondPicture} src={BeachHouse2} alt="beach house" />
                    </section>
                    <section className={styles.secondaryImgsContainer}>
                        <Image className={styles.thirdPicture} src={BeachHouse3} alt="beach house" />
                    </section>
                </section>
            </section>
            <h3 className={styles.title}>Lody Descoberta</h3>
            <p className={styles.subtitle}>Angra dos Reis, apenas 2 horas de você</p>
            <section className={styles.iconsContainer}> 
                {
                    icons.map((icon, index) => (

                        <div key={index} className={styles.icon}>
                            <Image src={icon} alt={''} />
                        </div>
                    ))
                }
                <div className={styles.moreTags}>+12</div>
                <button onClick={clickHandler} className={styles.externalLinkButton}>
                    <Image className={styles.externalLinkIcon} src={ExternalLinkIcon} alt={''} />
                </button>
            </section>
        </section>
    )
}

export default OfferCard;