"use client"

import Button from '../Button'
import CheckboxButton from './components/CheckboxButton'

import Mountain from '@/assets/icons/mountains.png'
import Sunset from '@/assets/icons/sunset.png'

import styles from './searchbar.module.scss'

const SearchBar = () => {
    return (
        <section className={styles.searchBar}>
            <section className={styles.inputs}>
                <CheckboxButton Icon={Mountain} type="primary">Montanhas</CheckboxButton>
                <CheckboxButton Icon={Sunset} type="secondary">Litoral</CheckboxButton>
                <CheckboxButton Icon={Sunset} type="secondary">Litoral</CheckboxButton>
            </section>
            <Button type="primary"> Reservar meu lody </Button>
        </section>
    )
}

export default SearchBar;