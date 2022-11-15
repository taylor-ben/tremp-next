export interface PostsResponse {
  posts: Post[]
  pageCursor: string
}

export interface Post {
  content: string
  name: string
  image: string
  date: string
  postId: string
  groupId: string
  userId: number | string
  driver: boolean
  cityFrom: string[]
  cityTo: string[]
}

export type City = [string, string]

export interface EnglishQuery {
  driver?: boolean | null
  to?: string | null
  from?: string | null
}

export interface CityMappers {
  mapToEnglish: CityNameTranslate
  toHebrew: CityNameTranslate
}

export interface HebrewQuery {
  driver?: boolean
  cityFrom?: string
  cityTo?: string
}

export type QueryParser = (query: EnglishQuery) => HebrewQuery

export type CityNameTranslate = Record<string, string>
