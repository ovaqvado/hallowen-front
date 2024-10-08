import { FC } from 'react'
import img from '../../img/halloween_home.jpg'
import styles from './Home.module.scss'

export const Home: FC = () => {
	return (
		<div className={styles.home}>
			<h1 className={styles.title}>Halloween Blogs</h1>
			<p className={styles.subtitle}>
				On this site you can see many interesting articles. In them you can read
				various terrifying stories.
			</p>
			<img src={img} alt='' />
		</div>
	)
}
