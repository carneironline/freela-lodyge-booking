'use client'
import { useContext } from 'react'
import styles from './header.module.scss'
import Menu from '../Menu'
import SearchBar from '../SearchBar'
import Availability from './components/Availability'
import { LocaleContext } from '@/context/LocaleContext'
import parse from 'html-react-parser'

const Header = () => {
    const { translate } = useContext(LocaleContext);

    return (
        <section className={styles.headerBg}>
            <Menu />
            <aside className={styles.fadeoutMask}></aside>
            <section className={styles.headerContainer}>
                <h1 className={styles.headerTitleMobi}>{parse(translate('components.searchBar.pageTitleMobi'))}</h1>
                <h2 className={styles.headerTitleDesk}>{parse(translate('components.searchBar.pageTitleDesk'))}</h2>
                <SearchBar />
                <Availability />
            </section>
        </section>
    )
}

export default Header;