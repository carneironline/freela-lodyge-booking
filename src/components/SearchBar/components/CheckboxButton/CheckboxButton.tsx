import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image'
import styles from './CheckboxButton.module.scss'
import { useState } from 'react'

type CheckboxButtonType = {
    type: string;
    children: ReactNode;
    Icon: StaticImageData;
};

const CheckboxButton = ({ type, children, Icon }: CheckboxButtonType) => {
    const [checked, setChecked] = useState(false);

    return (
        <label className={`${styles.container} ${styles[type]}`}>
            <input type="checkbox" className={styles.input} checked={checked} onChange={() => setChecked(!checked)}/>
            <div className={styles.button}>
                <div className={styles.labelContainer}>
                    <Image src={Icon} alt="Mountains" /> <span className={styles.label}>{children}</span>
                </div>
                <span className={styles.innerCircle}></span>
            </div>
        </label>
    )
}

export default CheckboxButton;