export type postsReducer = {
	user: string
	view: number
	comments: number
}

export type commentsReducer = {
	user: string
	date: number
}

export type usersReducer = {
	name: string
	image?: HTMLImageElement
}
