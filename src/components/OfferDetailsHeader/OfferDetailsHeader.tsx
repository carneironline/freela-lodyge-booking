"use client";

import { useContext } from 'react'
import styles from './OfferDetailsHeader.module.scss'
import Image from 'next/image'

import { LodyDetails1, LodyDetails2, LodyDetails3 } from '@/assets/images'
import Play from '../../assets/icons/play.png'
import ButtonMorePics from './components/ButtonMorePics'
import { PlayerModalContext } from '@/context';

const OfferDetailsHeader = () => {
  const { clickHandler } = useContext(PlayerModalContext);

    return (
        <section className={styles.offerDetailsHeader}>
            <section className={styles.imgContainer}>
                <section className={styles.mainPictureContainer}>
                    <button className={styles.playContainer} onClick={clickHandler}>
                        <Image className={styles.play} src={Play} alt="Play" />
                    </button>
                    <Image className={styles.mainPicture} src={LodyDetails1} alt="beach house" />
                </section>
                <section className={styles.imagContainerCol2}>
                    <Image className={styles.secondPicture} src={LodyDetails2} alt="beach house" />
                    <section className={styles.thirdPictureContainer}>
                        <div className={styles.overlay}></div>
                        <ButtonMorePics />
                        <Image className={styles.thirdPicture} src={LodyDetails3} alt="beach house" />
                    </section>
                </section>
            </section>
        </section>
    )
}

export default OfferDetailsHeader;