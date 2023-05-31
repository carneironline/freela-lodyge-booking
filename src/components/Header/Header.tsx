import styles from './header.module.scss'

const Header = () => {
    return (
        <section className={styles.headerBg}>
            <aside className={styles.fadeoutMask}></aside>
        </section>
    )
}

export default Header;