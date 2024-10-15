import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from '../types/reducer.postsReducer'
export const store = configureStore({
	reducer: {
		posts: postsReducer,
		comments: commentsReducer,
		users: usersReducer,
	},
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
