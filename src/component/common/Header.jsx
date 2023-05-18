import styles from './header.module.scss';
import logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo de kasa" />
      <nav className={styles.nav}>
        <Link to="/" className={useLocation().pathname === '/' ? styles.active : ''}>Accueil</Link>
        <Link to="/about" className={useLocation().pathname === '/about' ? styles.active : ''}>A Propos</Link>
      </nav>
    </header>
  )
}

export default Header;