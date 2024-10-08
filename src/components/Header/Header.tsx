import { FC } from 'react'
import { GiPumpkinMask } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export const Header: FC = () => {
	return (
		<div className={styles.header}>
			<GiPumpkinMask className={styles.icon} />
			<div className={styles.links}>
				<Link className={styles.link} to='/'>
					Home
				</Link>
				<Link className={styles.link} to='/blog'>
					Blog
				</Link>
				<Link className={styles.link} to='/profile'>
					Profile
				</Link>
			</div>
			<div className={styles.auth_about}>
				<div className={styles.login}>login/logout</div>
			</div>
		</div>
	)
}
