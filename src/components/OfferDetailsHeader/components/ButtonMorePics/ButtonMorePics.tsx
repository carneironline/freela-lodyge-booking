import styles from './ButtonMorePics.module.scss'
import Image from 'next/image'

import AddPhotoIcon from '@/assets/icons/add-photo.png'

const ButtonMorePics = () => {
    return (
        <a href="#" className={styles.buttonMorePics}>
            <Image src={AddPhotoIcon} alt={``} />
            Mais Fotos
        </a>
    )
}

export default ButtonMorePics;