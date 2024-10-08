import styles from './App.module.scss'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Router } from './router/Router'

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<Router />
			<Footer />
		</div>
	)
}

export default App
