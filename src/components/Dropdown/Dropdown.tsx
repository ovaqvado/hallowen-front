import { FC, useState } from 'react'
import styles from './Dropdown.module.scss'

export const Dropdown: FC = () => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(!open)
	}
	const selectGender = (gender: string) => {
		console.log(`Выбран пол: ${gender}`)
		setOpen(false)
	}

	const defaultText = 'Не выбрано'

	return (
		<div className={styles.dropdown}>
			<button onClick={handleOpen}>{defaultText}</button>
			{open ? (
				<ul className={styles.menu}>
					<li className={styles.menu_item}>
						<button onClick={() => selectGender('Мужской')}>Мужской</button>
					</li>
					<li className={styles.menu_item}>
						<button onClick={() => selectGender('Женский')}>Женский</button>
					</li>
					<li className={styles.menu_item}>
						<button onClick={() => selectGender('Не вбрано')}>
							Не выбрано
						</button>
					</li>
				</ul>
			) : null}
		</div>
	)
}
