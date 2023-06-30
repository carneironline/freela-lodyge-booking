import { ReactNode } from 'react';
import styles from './ImportantToKnow.module.scss'
import clsx from "classnames";


const ImportantToKnow = () => {
    return (
       <section className={styles.importantToKnow}>
            <h2 className={styles.title}>Coisas para saber</h2>
            <section className={styles.lists}>
                <ul className={styles.list}>
                    <li className={styles.listHeader}>Regras da Lody Descoberta</li>
                    <li className={styles.listItem}>· 3 hóspedes máximo (1 Cama king size)</li>
                    <li className={styles.listItem}>· Pets sempre bem vindos</li>
                </ul>

                <ul className={styles.list}>
                    <li className={styles.listHeader}>Segurança</li>
                    <li className={styles.listItem}>· Câmeras apenas na entrada e acessos</li>
                    <li className={styles.listItem}>· Alarme de segurança monitorado 24 hrs</li>
                </ul>

                <ul className={styles.list}>
                    <li className={styles.listHeader}>Política de Cancelamento</li>
                    <li className={styles.listItem}>· Cancelamento gratuito até 48 hrs antes do check-in</li>
                </ul>
            </section>
       </section>
    )
}

export default ImportantToKnow;