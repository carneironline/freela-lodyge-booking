import styles from './ButtonMorePics.module.scss'
import Image from 'next/image'

import AddPhotoIcon from '@/assets/icons/add-photo.png'

const ButtonMorePics = () => {
    return (
        <a style={{ cursor: "pointer" }} href="/gallery/2" className={styles.buttonMorePics}>
            <Image quality={100} src={AddPhotoIcon} alt={``} />
            Mais Fotos
        </a>
    )
}

export default ButtonMorePics;