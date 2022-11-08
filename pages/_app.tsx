import { type AppType } from 'next/app'
import '../styles/global.css'
import { ThemeWrap } from '../app/ThemeWrap'
import { NextAdapter } from 'next-query-params'
import { QueryParamProvider } from 'use-query-params'
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

function Adapter(props: any) {
  return <NextAdapter {...props} shallow={false} />
}

const MyApp: AppType = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <QueryParamProvider adapter={Adapter}>
          <ThemeWrap>
            <Component {...pageProps} />
          </ThemeWrap>
        </QueryParamProvider>
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
