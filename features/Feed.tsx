import { useQuery } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { useQueryParam } from 'use-query-params'
import { fetchPosts } from '../app/api'
import {
  CityNameTranslate,
  IsDriver,
  Post,
  PostsResponse,
  QueryParser,
  SearchParams,
} from './post.interfaces'
import { parseQuery } from './supported-cities.helpers'
import { useCityParams } from './useSearchParams'

interface Props {
  mapToHebrew: CityNameTranslate
}

export function Feed({ mapToHebrew }: Props) {
  const cityParams = useCityParams(mapToHebrew)
  console.log('cityParams:', cityParams)
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
