import Image from 'next/image'
import Logo from '@/assets/images/logo-lodyge.png'
import styles from './menu.module.scss'
import { Hamburguer } from './components/Hamburguer'
import { Navigation } from './components/Navigation'
import ToggleLocationDesk from './components/ToggleLocationDesk'

const Menu = () => {
    return (
        <header className={styles.menu}>
            <Image src={Logo} alt="Lodyge" className={styles.logo} />
            <Hamburguer />
            <section className={styles.deskNavContainer}>
                <Navigation className={styles.deskNavi} />
            </section>
            <section className={styles.deskLocationContainer}>
                <ToggleLocationDesk />
            </section>
        </header>
    )
}

export default Menu;