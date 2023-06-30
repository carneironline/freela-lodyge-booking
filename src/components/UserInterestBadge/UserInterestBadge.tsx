import { useMemo } from 'react';
import styles from './UserInterestBadge.module.scss'

type UserInterestBadgeType = {
    absolute?: boolean;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
};

const UserInterestBadge = ({ absolute = false, top = 0, bottom = 0, left = 0, right = 0 }: UserInterestBadgeType) => {
    const style = useMemo(() => {
        const position: 'absolute' | 'relative' = absolute ? 'absolute' : 'relative';
        const topValue = absolute ? top : 0;
        const bottomValue = absolute ? bottom : 0;
        const leftValue = absolute ? left : 0;
        const rightValue = absolute ? right : 0;

        return {
            position,
            top: topValue,
            bottom: bottomValue,
            left: leftValue,
            right: rightValue,
        };
    }, [absolute, top, bottom, left, right]);

    return (
        <section className={styles.interestBadge} style={style}>
            🔥 3 pessoas interessadas
        </section>
    )
}

export default UserInterestBadge;
