import { FC } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import styles from './Settings.module.scss'
import AboutMe from './Users/AboutMe'
import BlockList from './Users/BlockList'
import MyContacts from './Users/MyContacts'

export const Settings: FC = () => {
	return (
		<div>
			<nav>
				<NavLink
					className={({ isActive }) =>
						isActive ? `${styles.link} ${styles.active}` : styles.link
					}
					to='about-me'
				>
					Мои данные
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? `${styles.link} ${styles.active}` : styles.link
					}
					to='my-contacts'
				>
					Контакты
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? `${styles.link} ${styles.active}` : styles.link
					}
					to='block-list'
				>
					Черный список
				</NavLink>
			</nav>
			<div>
				<Routes>
					<Route path='about-me' element={<AboutMe />} />
					<Route path='my-contacts' element={<MyContacts />} />
					<Route path='block-list' element={<BlockList />} />
				</Routes>
			</div>
		</div>
	)
}
