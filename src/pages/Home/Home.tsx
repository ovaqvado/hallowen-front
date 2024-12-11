import { FC } from 'react'
import styles from './Home.module.scss'

export const Home: FC = () => {
	return (
		<div className={styles.home}>
			<p className={styles.subtitle}>
				On this site you will see a lot of different interesting news. You can
				also subscribe to a person to follow the news that he posts.
			</p>
		</div>
	)
}
