import {
  City,
  CityMappers,
  CityNameTranslate,
  HebrewQuery,
  EnglishQuery,
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
  query: EnglishQuery,
  toHebrew: CityNameTranslate
) => {
  const hebrewQuery: HebrewQuery = {}

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
