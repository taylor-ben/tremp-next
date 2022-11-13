import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../app/api'
import { CityNameTranslate } from './post.interfaces'
import { useCityParams } from './useSearchParams'

interface Props {
  mapToHebrew: CityNameTranslate
}

export function Feed({ mapToHebrew }: Props) {
  const { params } = useCityParams(mapToHebrew)

  const { data, isLoading } = useQuery(
    ['posts', params],
    () => fetchPosts(params),
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
