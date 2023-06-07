import styles from './header.module.scss'
import Menu from '../Menu';
import SearchBar from '../SearchBar';

const Header = () => {
    return (
        <section className={styles.headerBg}>
            <Menu />
            <aside className={styles.fadeoutMask}></aside>
            <section className={styles.headerContainer}>
                <h1 className={styles.headerTitle}>Lugares únicos,<br /> como você</h1>
                <SearchBar />
            </section>
        </section>
    )
}

export default Header;