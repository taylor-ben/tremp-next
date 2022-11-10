import { type NextPage } from 'next'
import Head from 'next/head'
import { FiltersContainer } from '../app/FiltersContainer'
import { Feed } from '../app/Feed'
import { fetchPosts } from '../app/api'
import { PostsResponse, SearchParams } from '../app/post.interfaces'
import { dehydrate, QueryClient } from '@tanstack/react-query'

export const getServerSideProps = async ({
  query,
}: {
  query: SearchParams
}) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['posts', query], () => fetchPosts(query))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      searchParams: query,
    },
  }
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tremp</title>
        <meta name='description' content='tremp' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main dir='rtl'>
        <div>hello2</div>
        <FiltersContainer />
        <Feed />
      </main>
      <footer>hello</footer>
    </>
  )
}

export default Home
