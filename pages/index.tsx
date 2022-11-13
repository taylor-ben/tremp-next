import { type NextPage } from 'next'
import Head from 'next/head'
import { Filters } from '../features/Filters'
import { Feed } from '../features/Feed'
import { fetchPosts, getSupportedCities } from '../app/api'
import {
  CityNameTranslate,
  PostsResponse,
  QueryParser,
  SearchParams,
} from '../features/post.interfaces'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { keys } from '../features/helpers'
import {
  createCityMappers,
  parseQuery,
} from '../features/supported-cities.helpers'

export const getServerSideProps = async ({
  query,
}: {
  query: SearchParams
}) => {
  const queryClient = new QueryClient()

  const supportedCities = await queryClient.fetchQuery(
    ['supportedCities'],
    getSupportedCities
  )

  const { mapToHebrew } = createCityMappers(supportedCities)

  const heQuery = parseQuery(query, mapToHebrew)

  await queryClient.prefetchQuery(['posts', query], () => fetchPosts(heQuery))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      searchParams: query,
      mapToHebrew,
    },
  }
}

const Home: NextPage<{ mapToHebrew: CityNameTranslate }> = ({
  mapToHebrew,
}) => {
  return (
    <>
      <Head>
        <title>Tremp</title>
        <meta name='description' content='tremp' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main dir='rtl'>
        <div>hello2</div>
        <Filters mapToHebrew={mapToHebrew} />
        <Feed mapToHebrew={mapToHebrew} />
      </main>
      <footer>hello</footer>
    </>
  )
}

export default Home
