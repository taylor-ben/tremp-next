import { useMemo } from 'react'
import { BooleanParam, StringParam, useQueryParams } from 'use-query-params'
import { flipRecord } from './helpers'
import { CityNameTranslate, HebrewQuery, EnglishQuery } from './post.interfaces'
import { parseQuery } from './supported-cities.helpers'

export const useCityParams = (toHebrew: CityNameTranslate) => {
  const toEnglish = useMemo(() => flipRecord(toHebrew), [toHebrew])

  const [query, setQuery] = useQueryParams({
    driver: BooleanParam,
    from: StringParam,
    to: StringParam,
  })

  const params = parseQuery(query, toHebrew)

  function setParams(hebrewQuery: HebrewQuery) {
    const englishQuery: EnglishQuery = {}
    if (hebrewQuery.cityFrom !== undefined) {
      englishQuery.from = toEnglish[hebrewQuery.cityFrom]
    }
    if (hebrewQuery.cityTo !== undefined) {
      englishQuery.to = toEnglish[hebrewQuery.cityTo]
    }
    if (hebrewQuery.driver !== undefined) {
      englishQuery.driver = hebrewQuery.driver
    }
    setQuery(englishQuery)
  }

  return { params, setParams }
}
