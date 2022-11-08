import { City, PostsResponse, SearchParams } from './post.interfaces'

async function fetchInterceptor<T>(
  input: string,
  init?: RequestInit,
  searchParams?: Record<string, string | boolean>
): Promise<T> {
  const baseUrl = 'http://localhost:3000/api/'
  const params = new URLSearchParams(searchParams as any)
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
    next: { revalidate: 60 },
  })
}
export async function getGroups() {
  return fetchInterceptor<[]>('general/groups', {
    method: 'GET',
    next: { revalidate: 60 },
  })
}
