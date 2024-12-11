import { Route, Routes } from 'react-router-dom'
import { Blog } from '../pages/Blog/Blog'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import { Home } from '../pages/Home/Home'
import { Profile } from '../pages/Profile/Profile'

export const Router = () => {
	return (
		<Routes>
			<Route path='*' element={<ErrorPage />} />
			<Route path='/' element={<Home />} />
			<Route path='/blog' element={<Blog />} />
			<Route path='/profile' element={<Profile />} />
		</Routes>
	)
}
