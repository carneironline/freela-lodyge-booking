'use client'

import styles from './gallery.module.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeftArrow from '@/assets/icons/arrow-left.svg';
import Campfire from '@/assets/icons/tagsWhite/Campfire.svg';
import Image, { StaticImageData } from 'next/image';

import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import quarto1 from '@/assets/images/gallery/quarto1.png';
import quarto2 from '@/assets/images/gallery/quarto2.png';
import quarto3 from '@/assets/images/gallery/quarto3.png';
import quarto4 from '@/assets/images/gallery/quarto4.png';

import interior1 from '@/assets/images/gallery/interior1.png';
import interior2 from '@/assets/images/gallery/interior2.png';
import interior3 from '@/assets/images/gallery/interior3.png';
import interior4 from '@/assets/images/gallery/interior4.png';

import externa1 from '@/assets/images/gallery/externa1.png';
import externa2 from '@/assets/images/gallery/externa2.png';
import externa3 from '@/assets/images/gallery/externa3.png';
import externa4 from '@/assets/images/gallery/externa4.png';

import experiencia1 from '@/assets/images/gallery/experiencia1.png';
import experiencia2 from '@/assets/images/gallery/experiencia2.png';
import experiencia3 from '@/assets/images/gallery/experiencia3.png';
import experiencia4 from '@/assets/images/gallery/experiencia4.png';
import { useState } from 'react';
import Menu from '@/components/Menu/Menu';
import Link from 'next/link';

const MAX_AMOUNT_OF_IMAGES = 4;

interface GalleryData {
  // Replace StaticImageData data in the future
  // This is a workaround to make mocked data work.
  [key: string]: string[] | StaticImageData[],
}

export default function PhotoGallery() {

  // MOCKED DATA
  const data: GalleryData = {
    quartos: [quarto1, quarto2, quarto3, quarto4],
    interior: [interior1, interior2, interior3, interior4],
    exterior: [externa1, externa2, externa3, externa4],
    experiencias: [experiencia1, experiencia2, experiencia3, experiencia4],
  }

  const [openLightbox, setOpenLightBox] = useState(false);
  const [selectedSection, setSelectedSection] = useState('');

  const showLightbox = (section : string) => {
    setOpenLightBox(!openLightbox);
    setSelectedSection(section)
  }

  const Tag = ({ title }: { title: string }) => (
    <div className={styles.tag}>
      <Image src={Campfire} alt="An icon showing the type of area of the house" />
      <span>{title}</span>
    </div>
  );

  const Tags = ({className}: any) => {
    const titles = [];
    for (let key in data) {
      titles.push(`${key.charAt(0).toUpperCase()}${key.slice(1)}`);
    }
    return (
      <div className={className}>
        {
          titles.map(title => <span onClick={() => {
            const el = document.getElementById(title);
            el?.scrollIntoView({
              behavior: 'smooth',
              block: 'center', 
              inline: 'nearest',
            });
          }}>
            <Tag title={title} key={title} />
          </span>)
        }
      </div>
    );
  }


  const Gallery = ({id,  title, images, section }: { title: string, images: string[] | StaticImageData[], section: string, id: string }) => (
    <div className={styles.gallery} id={id}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.photos}>
        {
          images.map((image: string | StaticImageData, index) => (
            <div className={index === MAX_AMOUNT_OF_IMAGES - 1 ? styles.lastPhoto : styles.photo}>
              <Image
                src={image}
                alt={`An image of the ${title} part of the house.`}
                className={styles.photo}
                placeholder="blur"
                onClick={() => showLightbox(section)}
              />
            </div>
          ))
        }
      </div>
    </div>
  );


  const Photos = () => {
    const titles = [];
    for (let key in data) {
      titles.push({ title: `${key.charAt(0).toUpperCase()}${key.slice(1)}`, images: data[key as keyof GalleryData] });
    }
    return (
      <>
        {
          titles.map(section => <Gallery id={section.title} title={section.title} key={section.title} images={section.images} section={section.title.toLowerCase()} />)
        }
      </>
    );
  }

  return (
    <section>
      <Menu />
      <section className={styles.galleryWrapper}>
        <div className={styles.arrowHeader}>
          <div className={styles.arrow}>
            <Image src={LeftArrow} alt='An left arrow icon' />
          </div>
          <div className={styles.title}>
            <h1>Lody Angra</h1>
          </div>
        </div>
        <div className={styles.tagsSection}>
          <Tags className={styles.tags} />
          <div className={styles.title}>
            <h1>Lody Angra</h1>
          </div>
        </div>
        <div className={styles.divider}></div>
        <section>
          <Photos />
        </section>
      </section>
      <aside>
        <Lightbox
          open={openLightbox}
          close={() => setOpenLightBox(false)}
          slides={selectedSection ? data[selectedSection as keyof GalleryData].map(image => image) as SlideImage[] : []}
        />
      </aside>
      <Footer />
    </section>
  )
}
