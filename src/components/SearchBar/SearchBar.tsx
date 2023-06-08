"use client"
import { ReactNode } from 'react';
import styles from './searchbar.module.scss'
import Button from '../Button'
import CheckboxButton from './components/CheckboxButton'

const SearchBar = () => {
    return (
        <section className={styles.searchBar}>
            <section className={styles.inputs}>
                <CheckboxButton type="primary">Montanhas</CheckboxButton>
                <CheckboxButton type="secondary">Litoral</CheckboxButton>
                <CheckboxButton type="secondary">Litoral</CheckboxButton>
            </section>
            <Button type="primary"> Reservar meu lody </Button>
        </section>
    )
}

export default SearchBar;