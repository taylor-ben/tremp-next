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

export type IsDriver = 'true' | 'false'

export interface SearchParams {
  driver?: IsDriver
  to?: string
  from?: string
}

export interface CityMappers {
  mapToEnglish: CityNameTranslate
  mapToHebrew: CityNameTranslate
}

export type QueryParser = (query: SearchParams) => {
  driver: IsDriver | undefined
  cityFrom: string | undefined
  cityTo: string | undefined
}

export type CityNameTranslate = Record<string, string>
