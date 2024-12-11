import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import useLogin from '../../customHooks/user'
import { HeaderProps } from '../../types/modal/type'
import styles from './Header.module.scss'
// IMG
import settingsImg from '../../img/settingsImg.svg'

export const Header: FC<HeaderProps> = ({ openModal }) => {
	return (
		<nav className={styles.header}>
			<p>Blog</p>
			<div className={styles.links}>
				<NavLink
					className={({ isActive }) =>
						isActive ? `${styles.link} ${styles.active}` : styles.link
					}
					to='/'
				>
					Home
				</NavLink>

				<NavLink
					className={({ isActive }) =>
						isActive ? `${styles.link} ${styles.active}` : styles.link
					}
					to='/blog'
				>
					Blog
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? `${styles.link} ${styles.active}` : styles.link
					}
					to='/profile'
				>
					Profile
				</NavLink>
			</div>
			<div className={styles.auth_buttons}>
				{useLogin ? (
					<button onClick={openModal} className={styles.login}>
						Sign In / Sign Up
					</button>
				) : (
					<button className={styles.settings_btn} onClick={openModal}>
						<img className={styles.settings_img} src={settingsImg} alt='' />
					</button>
				)}
			</div>
		</nav>
	)
}
