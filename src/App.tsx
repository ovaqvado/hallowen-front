import { useState } from 'react'
import styles from './App.module.scss'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ModalUser } from './components/ModalUser/ModalUser'
import { Router } from './router/Router'

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}
	return (
		<div className={styles.App}>
			<Header openModal={openModal} />
			<Router />
			{isModalOpen && <ModalUser closeModal={closeModal} />}
			<Footer />
		</div>
	)
}

export default App
