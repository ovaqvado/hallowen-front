import user from '../../img/user_undefined.svg'
import styles from './Blog.module.scss'
import bmw from './images/bmw.jpeg'
import clown from './images/clown.jpeg'
import dodge from './images/dodge.jpeg'
import food from './images/food.jpeg'
import friends from './images/friends.jpeg'
import girl from './images/girl.jpeg'
import mercedes from './images/mercedes.jpeg'
import monkey1 from './images/monkey1.jpeg'
import monkey2 from './images/monkey2.jpeg'
import toyota from './images/toyota.jpeg'

export const Blog = () => {
	return (
		<div className={styles.blog}>
			<div className={styles.cards}>
				<div className={styles.card}>
					<div className={styles.user}>
						<div className={styles.box_user_img}>
							<img src={user} alt='user_photo' className={styles.user_img} />
							<p className={styles.user_name}>Michael Nir</p>
						</div>
						<button className={styles.btn_sub}>Subscribe</button>
					</div>
					<div className={styles.info_container}>
						<div className={styles.card_img}>
							<img src={dodge} alt='img' className={styles.img_card} />
						</div>

						<div className={styles.text_btn}>
							<h3 className={styles.title}>My new car Dodge :)</h3>
							<p className={styles.text}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
								nesciunt asperiores. Nulla, ab quidem nesciunt dolorum
								recusandae totam dolores ad porro velit nostrum mollitia,
								inventore, rerum accusantium quae itaque labore.
							</p>
							<div className={styles.date_subscribe}>
								<p className={styles.date}>Date: 31.10.2024</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.user}>
						<div className={styles.box_user_img}>
							<img src={user} alt='user_photo' className={styles.user_img} />
							<p className={styles.user_name}>Michael Nir</p>
						</div>
						<button className={styles.btn_sub}>Subscribe</button>
					</div>
					<div className={styles.info_container}>
						<div className={styles.card_img}>
							<img src={clown} alt='img' className={styles.img_card} />
						</div>

						<div className={styles.text_btn}>
							<h3 className={styles.title}>My new car Dodge :)</h3>
							<p className={styles.text}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
								nesciunt asperiores. Nulla, ab quidem nesciunt dolorum
								recusandae totam dolores ad porro velit nostrum mollitia,
								inventore, rerum accusantium quae itaque labore.
							</p>
							<div className={styles.date_subscribe}>
								<p className={styles.date}>Date: 11.10.2024</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.user}>
						<div className={styles.box_user_img}>
							<img src={user} alt='user_photo' className={styles.user_img} />
							<p className={styles.user_name}>Michael Nir</p>
						</div>
						<button className={styles.btn_sub}>Subscribe</button>
					</div>
					<div className={styles.info_container}>
						<div className={styles.card_img}>
							<img src={girl} alt='img' className={styles.img_card} />
						</div>

						<div className={styles.text_btn}>
							<h3 className={styles.title}>My new car Dodge :)</h3>
							<p className={styles.text}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
								nesciunt asperiores. Nulla, ab quidem nesciunt dolorum
								recusandae totam dolores ad porro velit nostrum mollitia,
								inventore, rerum accusantium quae itaque labore.
							</p>
							<div className={styles.date_subscribe}>
								<p className={styles.date}>Date: 31.10.2024</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.user}>
						<div className={styles.box_user_img}>
							<img src={user} alt='user_photo' className={styles.user_img} />
							<p className={styles.user_name}>Michael Nir</p>
						</div>
						<button className={styles.btn_sub}>Subscribe</button>
					</div>
					<div className={styles.info_container}>
						<div className={styles.card_img}>
							<img src={bmw} alt='img' className={styles.img_card} />
						</div>

						<div className={styles.text_btn}>
							<h3 className={styles.title}>My new car Dodge :)</h3>
							<p className={styles.text}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
								nesciunt asperiores. Nulla, ab quidem nesciunt dolorum
								recusandae totam dolores ad porro velit nostrum mollitia,
								inventore, rerum accusantium quae itaque labore.
							</p>
							<div className={styles.date_subscribe}>
								<p className={styles.date}>Date: 31.10.2024</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.user}>
						<div className={styles.box_user_img}>
							<img src={user} alt='user_photo' className={styles.user_img} />
							<p className={styles.user_name}>Michael Nir</p>
						</div>
						<button className={styles.btn_sub}>Subscribe</button>
					</div>
					<div className={styles.info_container}>
						<div className={styles.card_img}>
							<img src={mercedes} alt='img' className={styles.img_card} />
						</div>

						<div className={styles.text_btn}>
							<h3 className={styles.title}>My new car Dodge :)</h3>
							<p className={styles.text}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
								nesciunt asperiores. Nulla, ab quidem nesciunt dolorum
								recusandae totam dolores ad porro velit nostrum mollitia,
								inventore, rerum accusantium quae itaque labore.
							</p>
							<div className={styles.date_subscribe}>
								<p className={styles.date}>Date: 31.10.2024</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.user}>
						<div className={styles.box_user_img}>
							<img src={user} alt='user_photo' className={styles.user_img} />
							<p className={styles.user_name}>Michael Nir</p>
						</div>
						<button className={styles.btn_sub}>Subscribe</button>
					</div>
					<div className={styles.info_container}>
						<div className={styles.card_img}>
							<img src={dodge} alt='img' className={styles.img_card} />
						</div>

						<div className={styles.text_btn}>
							<h3 className={styles.title}>My new car Dodge :)</h3>
							<p className={styles.text}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
								nesciunt asperiores. Nulla, ab quidem nesciunt dolorum
								recusandae totam dolores ad porro velit nostrum mollitia,
								inventore, rerum accusantium quae itaque labore.
							</p>
							<div className={styles.date_subscribe}>
								<p className={styles.date}>Date: 31.10.2024</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.user}>
						<div className={styles.box_user_img}>
							<img src={user} alt='user_photo' className={styles.user_img} />
							<p className={styles.user_name}>Michael Nir</p>
						</div>
						<button className={styles.btn_sub}>Subscribe</button>
					</div>
					<div className={styles.info_container}>
						<div className={styles.card_img}>
							<img src={toyota} alt='img' className={styles.img_card} />
						</div>

						<div className={styles.text_btn}>
							<h3 className={styles.title}>My new car Dodge :)</h3>
							<p className={styles.text}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
								nesciunt asperiores. Nulla, ab quidem nesciunt dolorum
								recusandae totam dolores ad porro velit nostrum mollitia,
								inventore, rerum accusantium quae itaque labore.
							</p>
							<div className={styles.date_subscribe}>
								<p className={styles.date}>Date: 31.10.2024</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.user}>
						<div className={styles.box_user_img}>
							<img src={user} alt='user_photo' className={styles.user_img} />
							<p className={styles.user_name}>Michael Nir</p>
						</div>
						<button className={styles.btn_sub}>Subscribe</button>
					</div>
					<div className={styles.info_container}>
						<div className={styles.card_img}>
							<img src={food} alt='img' className={styles.img_card} />
						</div>

						<div className={styles.text_btn}>
							<h3 className={styles.title}>My new car Dodge :)</h3>
							<p className={styles.text}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
								nesciunt asperiores. Nulla, ab quidem nesciunt dolorum
								recusandae totam dolores ad porro velit nostrum mollitia,
								inventore, rerum accusantium quae itaque labore.
							</p>
							<div className={styles.date_subscribe}>
								<p className={styles.date}>Date: 31.10.2024</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.user}>
						<div className={styles.box_user_img}>
							<img src={user} alt='user_photo' className={styles.user_img} />
							<p className={styles.user_name}>Michael Nir</p>
						</div>
						<button className={styles.btn_sub}>Subscribe</button>
					</div>
					<div className={styles.info_container}>
						<div className={styles.card_img}>
							<img src={monkey1} alt='img' className={styles.img_card} />
						</div>

						<div className={styles.text_btn}>
							<h3 className={styles.title}>My new car Dodge :)</h3>
							<p className={styles.text}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
								nesciunt asperiores. Nulla, ab quidem nesciunt dolorum
								recusandae totam dolores ad porro velit nostrum mollitia,
								inventore, rerum accusantium quae itaque labore.
							</p>
							<div className={styles.date_subscribe}>
								<p className={styles.date}>Date: 31.10.2024</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.user}>
						<div className={styles.box_user_img}>
							<img src={user} alt='user_photo' className={styles.user_img} />
							<p className={styles.user_name}>Michael Nir</p>
						</div>
						<button className={styles.btn_sub}>Subscribe</button>
					</div>
					<div className={styles.info_container}>
						<div className={styles.card_img}>
							<img src={friends} alt='img' className={styles.img_card} />
						</div>

						<div className={styles.text_btn}>
							<h3 className={styles.title}>My new car Dodge :)</h3>
							<p className={styles.text}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
								nesciunt asperiores. Nulla, ab quidem nesciunt dolorum
								recusandae totam dolores ad porro velit nostrum mollitia,
								inventore, rerum accusantium quae itaque labore.
							</p>
							<div className={styles.date_subscribe}>
								<p className={styles.date}>Date: 31.10.2024</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.user}>
						<div className={styles.box_user_img}>
							<img src={user} alt='user_photo' className={styles.user_img} />
							<p className={styles.user_name}>Michael Nir</p>
						</div>
						<button className={styles.btn_sub}>Subscribe</button>
					</div>
					<div className={styles.info_container}>
						<div className={styles.card_img}>
							<img src={monkey2} alt='img' className={styles.img_card} />
						</div>

						<div className={styles.text_btn}>
							<h3 className={styles.title}>My new car Dodge :)</h3>
							<p className={styles.text}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
								nesciunt asperiores. Nulla, ab quidem nesciunt dolorum
								recusandae totam dolores ad porro velit nostrum mollitia,
								inventore, rerum accusantium quae itaque labore.
							</p>
							<div className={styles.date_subscribe}>
								<p className={styles.date}>Date: 31.10.2024</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
