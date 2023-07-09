import styles from './UserInterestBadge.module.scss'

type UserInterestBadgeType = {
    absolute?: boolean;
};

const UserInterestBadge = ({ absolute = false }: UserInterestBadgeType) => {
    const styleClass = absolute ? `${styles.interestBadge} ${styles.absolute}` : styles.interestBadge;

    return (
        <section className={styleClass}>
            🔥 3 pessoas interessadas
        </section>
    )
}

export default UserInterestBadge;
