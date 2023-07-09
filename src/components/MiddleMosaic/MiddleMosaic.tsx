import React from 'react';
import styles from './mosaic.module.scss';
import mask from '@/assets/images/mosaic/mask.png';
import mask1 from '@/assets/images/mosaic/mask1.png';
import mask2 from '@/assets/images/mosaic/mask2.png';
import mask3 from '@/assets/images/mosaic/mask3.png';
import mask4 from '@/assets/images/mosaic/mask4.png';
import mask5 from '@/assets/images/mosaic/mask5.png';
import mask6 from '@/assets/images/mosaic/mask6.png';
import mask7 from '@/assets/images/mosaic/mask7.png';
import mask8 from '@/assets/images/mosaic/mask8.png';
import mask9 from '@/assets/images/mosaic/mask9.png';
import mask10 from '@/assets/images/mosaic/mask10.png';
import Image from 'next/image';

function MiddleMosaic() {
  return (
    <section className={styles.middleSection}>
      <div className={styles.text}>
        <h2 className={styles.title}>
          Explore imóveis únicos<br/>com experiências inéditas
        </h2>
        <p className={styles.subtitle}>Cada Lody é pensada nos mínimos detalhes para você viver o agora e focar no mundo real. <br/>
        Tudo privativo para você e seu convidado aproveitar cada momento.</p>
      </div>
      <div className={styles.mosaicFirst}>
        <div className={styles.opacity40}><Image src={mask} alt="" /></div>
        <div className={styles.opacity70}><Image src={mask1} alt="" /></div>
        <div><Image src={mask10} alt="" /></div> {/* IMAGEM REPETIDA, TROCAR */}
        <div><Image src={mask2} alt="" /></div>
        <div className={styles.opacity70}><Image src={mask3} alt="" /></div>
        <div className={styles.opacity40}><Image src={mask4} alt="" /></div>
      </div>
      <div className={styles.mosaicSecond}>
        {/* <div><Image src={mask5} alt="" /></div>
        <div><Image src={mask6} alt="" /></div> */}
        <div className={styles.opacity40}><Image src={mask7} alt="" /></div>
        <div className={styles.opacity70}><Image src={mask8} alt="" /></div>
        <div><Image src={mask4} alt="" /></div> {/* IMAGEM REPETIDA, TROCAR */}
        <div><Image src={mask} alt="" /></div> {/* IMAGEM REPETIDA, TROCAR */}
        <div className={styles.opacity70}><Image src={mask9} alt="" /></div>
        <div className={styles.opacity40}><Image src={mask10} alt="" /></div>
      </div>
    </section>
  );
}

export default MiddleMosaic;