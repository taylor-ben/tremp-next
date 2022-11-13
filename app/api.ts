import { City, PostsResponse, SearchParams } from '../features/post.interfaces'

async function fetchInterceptor<T>(
  input: string,
  init?: RequestInit,
  searchParams?: any
): Promise<T> {
  const baseUrl = 'http://localhost:3000/api/'
  const params = new URLSearchParams(searchParams)
  console.log('params:', params)
  const res = await fetch(`${baseUrl}${input}?${params}`, init)
  return res.json()
}

// export async function fetchPosts(searchParams: SearchParams) {
//   console.log('searchParams:', searchParams)
//   return fetchInterceptor<PostsResponse>('posts', {
//     body: JSON.stringify(searchParams),
//     method: 'POST',
//     // next: { revalidate: 60 },
//     cache: 'no-cache',
//   })
// }
export async function fetchPosts(searchParams: SearchParams) {
  return fetchInterceptor<PostsResponse>(
    'posts',
    {
      method: 'GET',
      next: { revalidate: 60 },
      cache: 'no-cache',
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
