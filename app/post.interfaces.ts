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

export interface SearchParams extends Record<string, string | boolean> {
  driver: boolean
}
