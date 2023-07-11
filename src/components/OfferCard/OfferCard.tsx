"use client";

import { useContext } from 'react'
import Image, { StaticImageData } from 'next/image'
import UserInterestBadge from '../UserInterestBadge'
import { TagsControlContext } from '@/context'
import Link from 'next/link';

import CallBell from '@/assets/icons/tagsWhite/CallBell.svg'
import Campfire from '@/assets/icons/tagsWhite/Campfire.svg'
import Garage from '@/assets/icons/tagsWhite/Garage.svg'
import Dog from '@/assets/icons/tagsWhite/Dog.svg'
import ExternalLinkIcon from '@/assets/icons/arrow-up-right.svg'

import styles from './OfferCard.module.scss'

type OfferCardType = {
    title: string,
    subtitle: string,
    image1: StaticImageData,
    image2: StaticImageData,
    image3: StaticImageData,
}

const OfferCard = ({ title, subtitle, image1, image2, image3}: OfferCardType) => {

    const { clickHandler } = useContext(TagsControlContext)

    const icons = [
        CallBell,
        Campfire,
        Garage,
        Dog,
    ]

    return (
        <section className={styles.cardContainer}>
            <Link href="/offer-details">
                <section className={styles.imgContainer}>
                    <UserInterestBadge absolute />
                    <section>
                        <Image className={styles.mainPicture} src={image1} quality={100} alt="beach house" />
                    </section>
                    <section className={styles.imagContainerCol2}>
                        <section className={styles.secondaryImgsContainer}>
                            <Image className={styles.secondPicture} src={image2} quality={100} alt="beach house" />
                        </section>
                        <section className={styles.secondaryImgsContainer}>
                            <Image className={styles.thirdPicture} src={image3} quality={100} alt="beach house" />
                        </section>
                    </section>
                </section>
            </Link>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
            <section className={styles.iconsContainer}>
                <button onClick={clickHandler} className={styles.tagsButton}>
                    {
                        icons.map((icon, index) => (

                            <div key={index} className={styles.iconContainer}>
                                <Image className={styles.icon} src={icon} alt={''} />
                            </div>
                        ))
                    }
                    <div className={styles.moreTags}>+12</div>
                </button>
                <a href="/offer-details" className={styles.externalLinkButton}>
                    <Image className={styles.externalLinkIcon} src={ExternalLinkIcon} alt={''} />
                </a>
            </section>
        </section>
    )
}

export default OfferCard;