import Image from 'next/image'
import Logo from '@/assets/images/logo-lodyge.png'
import styles from './menu.module.scss'
import { Hamburguer } from './components/Hamburguer';

const Menu = () => {
    return (
        <header className={styles.menu}>
            <Image src={Logo} alt="Lodyge" className={styles.logo} />
            <Hamburguer />
        </header>
    )
}

export default Menu;