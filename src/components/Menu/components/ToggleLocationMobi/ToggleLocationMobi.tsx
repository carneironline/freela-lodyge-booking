import React, { useContext } from "react";
import { LocaleContext } from '@/context/LocaleContext';
import clsx from "classnames";

import styles from './ToggleLocationMobi.module.scss';

export const ToggleLocationSwitch: React.FC = () => {
  const { toggleLocation, setLocale, isPT} = useContext(LocaleContext);

  return (
    <>
      <section className={styles.localesContainer}>
        <button 
          className={clsx({
            [styles.localeMobiButton]: true,
            [styles.localeActive]: isPT,
          })}
          onClick={() => {toggleLocation(true); setLocale('pt-BR')}}>
            PT
            <span className={styles.localePipe}>|</span>
          </button>
        <button           
          className={clsx({
            [styles.localeMobiButton]: true,
            [styles.localeActive]: !isPT,
          })} 
          onClick={() => {toggleLocation(false); setLocale('en')}}> 
            EN
          </button>
      </section>
    </>
  );
};

export const ToggleLocation = React.memo(ToggleLocationSwitch);

