"use client";
import { useState, useContext } from 'react';
import styles from './ToggleLocationDesk.module.scss';
import Image from 'next/image';
import Global from '@/assets/icons/global.png';
import { LocaleContext } from '@/context/LocaleContext';

const ToggleLocationDesk = () => {
    const { toggleLocation, setLocale, isPT} = useContext(LocaleContext);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('pt-BR');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

    return (
        <div className={styles.languageSelector}>
            <div className={styles.icon} onClick={(toggleDropdown)}>
                <Image src={Global} alt="Internationalization" />
            </div>
            {isOpen && (
                <div className={styles.dropdown}>
                    <div onClick={() => { toggleLocation(true); setLocale('pt-BR') }} className={styles.option}>
                        PT
                    </div>
                    <hr className={styles.divison} />
                    <div onClick={() => {toggleLocation(false); setLocale('en')}} className={styles.option}>
                        EN
                    </div>
                </div>
            )}
        </div>
    );
};

export default ToggleLocationDesk;