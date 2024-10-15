import { FC, useState } from 'react'
import { Dropdown } from '../../components/Dropdown/Dropdown'
import { UserInput } from '../../types/user/type'
import styles from './Profile.module.scss'
import user from './michael_mayers.jpeg'

export const Input: FC<UserInput> = ({
	name,
	setName,
	surname,
	setSurname,
}) => {
	return (
		<div>
			<input
				value={name}
				onChange={e => setName(e.target.value)}
				type='text'
				placeholder='name'
			/>
			<input
				value={surname}
				onChange={e => setSurname(e.target.value)}
				type='text'
				placeholder='surname'
			/>
		</div>
	)
}

// Основной компонент Profile
export const Profile: FC = () => {
	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')

	return (
		<div className={styles.profile}>
			<div className={styles.card_user}>
				<img className={styles.image_profile} src={user} alt='your_photos' />
				<div className={styles.name_box}>
					<p className={styles.name}>{name ? name : 'Name'}</p>
					<p className={styles.name}>{surname ? surname : 'Surname'}</p>
				</div>
				<div className={styles.gender}>
					<Dropdown />
				</div>
				{/* Передача пропсов в компонент Input */}
				<Input
					name={name}
					setName={setName}
					surname={surname}
					setSurname={setSurname}
				/>
			</div>
			<div>Your posts</div>
			<div>
				<div>Likes</div>
				<div>Count posts</div>
				<div>Subscribers</div>
			</div>
		</div>
	)
}
