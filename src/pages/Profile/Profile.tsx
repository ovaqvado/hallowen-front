import { FC } from 'react'
// import { Dropdown } from '../../components/Dropdown/Dropdown'
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

export const Profile: FC = () => {
	// const [name, setName] = useState('')
	// const [surname, setSurname] = useState('')

	return (
		<div className={styles.profile}>
			<div className={styles.card_user}>
				<img className={styles.image_profile} src={user} alt='your_photos' />
				<div className={styles.name_count}>
					<div className={styles.name_box}>
						<p className={styles.name}>Name</p>
						<p className={styles.name}>Surname</p>
					</div>
					<div className={styles.counter_box}>
						<div className={styles.count}>
							Likes: <span className={styles.num_count}>10</span>
						</div>
						<div className={styles.count}>
							Posts: <span className={styles.num_count}>10</span>
						</div>
						<div className={styles.count}>
							Subscribers: <span className={styles.num_count}>10</span>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.about}>
				<p className={styles.about_text}>
					About me: Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quidem eaque beatae neque eum, possimus ab numquam, dolore corrupti
					praesentium natus corporis nostrum harum, quia vel odit nesciunt
					dignissimos recusandae est!
				</p>
			</div>
			<div className={styles.container_router}></div>
		</div>
	)
}
