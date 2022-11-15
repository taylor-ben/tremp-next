import {
  City,
  CityMappers,
  CityNameTranslate,
  SearchParams,
} from './post.interfaces'
import { removeUndefined } from './helpers'

export function createCityMappers(supportedCities: City[]): CityMappers {
  const mapToEnglish: CityNameTranslate = {}
  supportedCities.forEach(([he, en]) => (mapToEnglish[he] = en))

  const toHebrew: CityNameTranslate = {}
  supportedCities.forEach(([he, en]) => (toHebrew[en] = he))

  return {
    mapToEnglish,
    toHebrew,
  }
}

export const parseQuery = (
  query: SearchParams,
  toHebrew: CityNameTranslate
) => {
  const hebrewQuery: {
    driver?: boolean | null
    cityFrom?: string
    cityTo?: string
  } = {}

  if (query.driver !== undefined) {
    hebrewQuery.driver = query.driver
  }
  if (query.from) {
    hebrewQuery.cityFrom = toHebrew[query.from]
  }
  if (query.to) {
    hebrewQuery.cityTo = toHebrew[query.to]
  }
  return hebrewQuery
}
