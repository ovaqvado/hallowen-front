import notFound from './404-page-not-found.svg'
import styles from './ErrorPage.module.scss'

export const ErrorPage = () => {
	return (
		<div>
			<h1>Oops!!! Page not found</h1>
			<img className={styles.image} src={notFound} alt='NotFound' />
		</div>
	)
}
