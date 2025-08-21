export type TagT = 'Город' | 'Природа' | 'Люди' | 'Животные' | 'Еда' | 'Напитки' | 'Архитектура' | 'Искусство'
export type NavNameT = 'home' | 'blog'

export type PostT = {
    id: number
    title: string
    desc: string
    tags: TagT[]
    createdAt: string
    img: string
    readingTime: number
    comments: CommentT[]
    text: string
}

export type CommentT = {
    id: number
    author: string
    text: string
    createdAt: string
    img: string
}

export type NavigationT = {
    id: number
    title: string
    name: NavNameT
    link: string
    isActive: boolean
}

export type FilterTag = {
    title: TagT
    isActive: boolean
}

export interface ApiResponse<T> {
    data: T
}