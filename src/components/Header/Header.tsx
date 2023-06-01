import styles from './header.module.scss'
import Menu from '../Menu';

const Header = () => {
    return (
        <section className={styles.headerBg}>
            <Menu />
            <aside className={styles.fadeoutMask}></aside>
        </section>
    )
}

export default Header;