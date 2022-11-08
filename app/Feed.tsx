import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { fetchPosts } from './api'
import { Post, PostsResponse, SearchParams } from './post.interfaces'

interface Props {
  searchParams: SearchParams
}

export function Feed({ searchParams }: Props) {
  const { data } = useQuery(
    ['posts', searchParams],
    () => fetchPosts(searchParams),
    {
      staleTime: 60_000,
    }
  )
  // const postList = await fetchPosts(searchParams)
  return (
    <div>
      Feed
      <div>
        {data?.posts?.map((post) => (
          <pre key={post.postId}>{JSON.stringify(post, null, 2)}</pre>
        ))}
      </div>
    </div>
  )
}
