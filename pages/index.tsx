import { type NextPage } from 'next'
import Head from 'next/head'
import { Filters } from '../features/Filters'
import { Feed } from '../features/Feed'
import { fetchPosts, getSupportedCities } from '../features/fetch.service'
import { CityNameTranslate, EnglishQuery } from '../features/post.interfaces'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import {
  createCityMappers,
  parseQuery,
} from '../features/supported-cities.helpers'
import { ToolbarCurtain } from '../features/ToolbarCurtain'

export const getServerSideProps = async ({
  query,
}: {
  query: EnglishQuery
}) => {
  const queryClient = new QueryClient()

  const supportedCities = await queryClient.fetchQuery(
    ['supportedCities'],
    getSupportedCities
  )

  const { toHebrew } = createCityMappers(supportedCities)

  const heQuery = parseQuery(query, toHebrew)

  await queryClient.prefetchQuery(['posts', query], () => fetchPosts(heQuery))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      searchParams: query,
      toHebrew,
    },
  }
}

const Home: NextPage<{ toHebrew: CityNameTranslate }> = ({ toHebrew }) => {
  return (
    <>
      <Head>
        <title>Tremp</title>
        <meta name='description' content='tremp' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main dir='rtl'>
        <div className='background_image'>
          <ToolbarCurtain />
          <Filters toHebrew={toHebrew} />
          <Feed toHebrew={toHebrew} />
        </div>
      </main>
    </>
  )
}

export default Home
