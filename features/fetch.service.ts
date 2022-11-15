import { City, PostsResponse, EnglishQuery } from './post.interfaces'

async function fetchInterceptor<T>(
  input: string,
  init?: RequestInit,
  searchParams?: any
): Promise<T> {
  const baseUrl = 'http://localhost:3001/api/'
  const params = new URLSearchParams(searchParams)
  const res = await fetch(`${baseUrl}${input}?${params}`, init)
  return res.json()
}

export async function fetchPosts(searchParams: EnglishQuery) {
  return fetchInterceptor<PostsResponse>(
    'posts',
    {
      method: 'GET',
      next: { revalidate: 60 },
    },
    searchParams
  )
}

export async function getSupportedCities() {
  return fetchInterceptor<City[]>('general/supported-cities', {
    method: 'GET',
    cache: 'force-cache',
  })
}
export async function getGroups() {
  return fetchInterceptor<[]>('general/groups', {
    method: 'GET',
    cache: 'force-cache',
  })
}
