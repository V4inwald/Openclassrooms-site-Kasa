import React from 'react'
import styles from './error.module.scss';
import { Link } from 'react-router-dom'

function Error() {
    return (
        <main className={styles.error}>
			<div className={styles['error-message']}>
				<h1>404</h1>
				<p>Oups! La page que vous demandez n'existe pas.</p>
			</div>
				<Link className={styles.link} to='/'>Retourner sur la page d'accueil</Link>
        </main>
    )
}
 
export default Error