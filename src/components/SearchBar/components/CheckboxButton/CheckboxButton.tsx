import Image from 'next/image'
import Icon from '@/assets/icons/mountains.png'
import styles from './CheckboxButton.module.scss'
import { useState } from 'react'

const CheckboxButton = () => {
    const [checked, setChecked] = useState(false);

    return (
        <label className={styles.container}>
            <input type="checkbox" className={styles.input} checked={checked} onChange={() => setChecked(!checked)}/>
            <div className={styles.button}>
                <div className={styles.labelContainer}>
                    <Image src={Icon} alt="Mountains" /> <span className={styles.label}>Montanhas</span>
                </div>
                <span className={styles.innerCircle}></span>
            </div>
        </label>
    )
}

export default CheckboxButton;