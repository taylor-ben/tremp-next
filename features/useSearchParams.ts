import { useMemo } from 'react'
import { useQueryParam } from 'use-query-params'
import { flipRecord } from './helpers'
import { CityNameTranslate, IsDriver } from './post.interfaces'
import { parseQuery } from './supported-cities.helpers'

export const useCityParams = (toHebrew: CityNameTranslate) => {
  const toEnglish = useMemo(() => flipRecord(toHebrew), [toHebrew])
  const [driver, setDriverParam] = useQueryParam<IsDriver>('driver')
  const [from, setFrom] = useQueryParam<string | undefined>('from')
  const [to, setTo] = useQueryParam<string | undefined>('to')
  const params = parseQuery({ driver, from, to }, toHebrew)

  const setFromParam = (cityName: string | undefined) => {
    console.log('cityName:', cityName)
    setFrom(() => toEnglish[cityName as string])
  }
  const setToParam = (cityName: string | undefined) => {
    console.log('cityName:', cityName)
    setTo(() => toEnglish[cityName as string])
  }

  return { params, setDriverParam, setFromParam, setToParam }
}
