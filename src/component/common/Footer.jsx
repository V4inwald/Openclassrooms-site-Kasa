import styles from './footer.module.scss';
import logo from '../../assets/logo-footer.png'

function Footer() {
    return (
      <footer className={styles.footer}>
        <img src={logo} alt="logo de kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    )
}

export default Footer;