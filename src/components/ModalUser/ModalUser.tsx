import { FC } from 'react'
import useLogin from '../../customHooks/user'
import { ModalUserProps } from '../../types/modal/type'
import { AuthForm } from '../AuthForm/AuthForm'
import { Settings } from '../SettingsUsers/Settings'
import styles from './ModalUser.module.scss'

export const ModalUser: FC<ModalUserProps> = ({ closeModal }) => {
	const handleModalClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}
	return (
		<>
			<div onClick={closeModal} className={styles.overlay_modal}>
				<div onClick={handleModalClick} className={styles.modal_box}>
					<button onClick={closeModal}>Close</button>
					{useLogin ? <AuthForm /> : <Settings />}
				</div>
			</div>
		</>
	)
}
