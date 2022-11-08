'use client'

import { Feed } from './Feed'
import { FiltersContainer } from './FiltersContainer'
import { SearchParams } from './post.interfaces'

import { NextAdapter } from 'next-query-params'
import { QueryParamProvider } from 'use-query-params'

function Adapter(props: any) {
  return <NextAdapter {...props} shallow={false} />
}
interface Props {
  searchParams: SearchParams
}

export default function Home({ searchParams }: Props) {
  return (
    <div>
      <main>
        <div>hello2</div>
        <FiltersContainer />
        <Feed searchParams={searchParams} />
      </main>
      <footer>hello</footer>
    </div>
  )
}