import Image from 'next/image'
import Logo from '@/assets/images/short-logo-white.png'
import styles from './Footer.module.scss'
import { Facebook, Insta, Tiktok, Youtube } from '@/assets/icons/social'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.companyInfo}>
                <div className={styles.logo}>
                    <Image src={Logo} alt={''} quality={100} />
                    <p className={styles.slogan}>Lugares únicos,<br /> como você</p>
                </div>

                <div className={styles.infoSummaryContainer}>
                    <p className={styles.infoSummaryText}>
                        Lodyge Tecnologia<br />
                        CNPJ: 34.227.857/0001-60<br />
                        Av Churchill 109 - sala 1202<br />
                        Rio de Janeiro - RJ
                    </p>
                </div>
            </section>

            <nav className={styles.navigation} aria-label="Footer Navigation">
                <div className={styles.navLinksContainer}>
                    <h3 className={styles.navListHeader}>FINANCE</h3>
                    <ul className={styles.tokensList}>
                        <li><a href='#' className={styles.tokensLink}>LDT <span>| Token</span></a></li>
                        <li><a href='#' className={styles.tokensLink}>LODYKEYS <span>| NFT</span></a></li>
                    </ul>
                </div>
                <div className={styles.navLinksContainer}>
                    <h3 className={styles.navListHeader}>ATENDIMENTO</h3>
                    <ul className={styles.footerLinksList}>
                        <li><a className={styles.footerNavLink} href='#'>WhatsApp</a></li>
                        <li><a className={styles.footerNavLink} href='#'>E-mail</a></li>
                    </ul>
                </div>
                <div className={styles.navLinksContainer}>
                    <h3 className={styles.navListHeader}>TERMOS</h3>
                    <ul className={styles.footerLinksList}>
                        <li><a className={styles.footerNavLink} href='#'>Termos de Serviço</a></li>
                        <li><a className={styles.footerNavLink} href='#'>Política de Uso</a></li>
                        <li><a className={styles.footerNavLink} href='#'>Política de Privacidade</a></li>
                        <li><a className={styles.footerNavLink} href='#'>Política de Cancelamento</a></li>
                    </ul>
                </div>
                <div className={styles.navLinksContainer}>
                    <h3 className={styles.navListHeader}>SOCIAL</h3>
                    <ul className={styles.footerSocialList}>
                        <li><a href='#'><Image src={Insta} alt={''} quality={100}/></a></li>
                        <li><a href='#'><Image src={Facebook} alt={''} quality={100}/></a></li>
                        <li><a href='#'><Image src={Youtube} alt={''} quality={100}/></a></li>
                        <li><a href='#'><Image src={Tiktok} alt={''} quality={100}/></a></li>
                    </ul>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;
