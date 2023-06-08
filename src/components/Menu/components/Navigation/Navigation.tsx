"use client";
import React, { useContext } from 'react';
import { LocaleContext } from '@/context/LocaleContext';
import { MenuControlContext } from '@/context/MenuControlContext';
import { Link } from './components/Link';
import Button from '@/components/Button';
import { ToggleLocation } from '@/components/Menu/components/ToggleLocationMobi';
import Image from 'next/image';
import Global from '../../../../assets/icons/global.png';

import styles from './navigation.module.scss';

type NavigationType = {
    containerClass?: string;
    className: string;
    isClickable?: true;
};

export const NavLinks = ({ containerClass, className, isClickable }: NavigationType) => {
    const { translate } = useContext(LocaleContext);
    const { clickHandler } = useContext(MenuControlContext);

    return (
        <section className={styles.navContainer} style={{position: 'relative'}}>
            <nav className={className}>
                <Link url="/#aboutMe" onClick={isClickable ? clickHandler : undefined}>{translate('components.menu.home')}</Link>
                <Link url="/#clients" onClick={isClickable ? clickHandler : undefined}>{translate('components.menu.about')}</Link>
                <Link url="/#portfolio" onClick={isClickable ? clickHandler : undefined}>{translate('components.menu.register')}</Link>
                <Button type="primary">
                    {translate('components.menu.login')}
                </Button>
            </nav>
            <hr className={styles.division} />
            <section className={styles.overviewContainer}>
                <button className={styles.tokenButton}>
                    LDT <span className={styles.tokenTypeText}>| Token</span>
                </button>
                <button className={styles.tokenButton}>
                    LODYKEYS <span className={styles.tokenTypeText}>| NFT</span>
                </button>
            </section>
            <section className={styles.localesContainer}>
                <Image src={Global} alt="Internationalization" /><ToggleLocation />
            </section>
        </section> 
    )
}
 
export const Navigation = React.memo(NavLinks);
