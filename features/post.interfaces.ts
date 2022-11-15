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

export interface SearchParams {
  driver?: boolean | null
  to?: string
  from?: string
}

export interface CityMappers {
  mapToEnglish: CityNameTranslate
  toHebrew: CityNameTranslate
}

export type QueryParser = (query: SearchParams) => {
  driver: boolean | undefined
  cityFrom: string | undefined
  cityTo: string | undefined
}

export type CityNameTranslate = Record<string, string>
