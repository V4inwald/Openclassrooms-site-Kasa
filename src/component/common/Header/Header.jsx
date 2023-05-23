import styles from './header.module.scss';
import logo from '../../../assets/images/logo.png'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  let path = useLocation().pathname;
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/" ><img src={logo} alt="logo de kasa" /></Link>
      </h1>
      <nav className={styles.nav}>
        <Link to="/" className={path === '/' ? styles.active : ''}>Accueil</Link>
        <Link to="/about" className={path === '/about' ? styles.active : ''}>A Propos</Link>
      </nav>
    </header>
  )
}

export default Header;