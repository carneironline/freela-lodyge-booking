import styles from './Availability.module.scss'

const Availability = () => {
    return (
        <div>
            <p className={styles.availability}>
                Existem <span className={styles.highlight}>2 lodys disponíveis</span> a 1.5 horas de você
            </p>
        </div>
    )
}

export default Availability;