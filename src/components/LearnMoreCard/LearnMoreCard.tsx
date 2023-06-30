import styles from './LearnMoreCard.module.scss'

type LearnMoreCardType = {
    title: string;
    description: string;
}

const LearnMoreCard = ({ title, description }:LearnMoreCardType) => {
    return (
        <section className={styles.learnMoreCard}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </section>
    )
}

export default LearnMoreCard;