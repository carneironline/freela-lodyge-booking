"use client"
import styles from './searchbar.module.scss'
import Button from '../Button'
import CheckboxButton from './components/CheckboxButton'

const SearchBar = () => {
    return (
        <section className={styles.searchBar}>
            <CheckboxButton />
            <CheckboxButton />
            <Button type="primary"> Reservar meu lody </Button>
        </section>
    )
}

export default SearchBar;