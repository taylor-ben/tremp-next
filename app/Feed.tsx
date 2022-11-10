import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useQueryParam } from 'use-query-params'
import { fetchPosts } from './api'
import { IsDriver, Post, PostsResponse, SearchParams } from './post.interfaces'

export function Feed() {
  const [driver] = useQueryParam<IsDriver>('driver')
  const searchParams: SearchParams = { driver }

  const { data, isLoading } = useQuery(
    ['posts', searchParams],
    () => fetchPosts(searchParams),
    {
      staleTime: 60_000,
    }
  )

  return (
    <div>
      Feed
      <div>
        {isLoading && 'טוען...'}
        {data?.posts?.map((post) => (
          <pre key={post.postId}>{JSON.stringify(post, null, 2)}</pre>
        ))}
      </div>
    </div>
  )
}
