import {
  City,
  CityMappers,
  CityNameTranslate,
  IsDriver,
  SearchParams,
} from './post.interfaces'
import { removeUndefined } from './helpers'

export function createCityMappers(supportedCities: City[]): CityMappers {
  const mapToEnglish: CityNameTranslate = {}
  supportedCities.forEach(([he, en]) => (mapToEnglish[he] = en))

  const mapToHebrew: CityNameTranslate = {}
  supportedCities.forEach(([he, en]) => (mapToHebrew[en] = he))

  return {
    mapToEnglish,
    mapToHebrew,
  }
}

export const parseQuery = (
  query: SearchParams,
  mapToHebrew: CityNameTranslate
) => {
  const hebrewQuery: {
    driver?: IsDriver
    cityFrom?: string
    cityTo?: string
  } = {}

  if (query.driver) {
    hebrewQuery.driver = query.driver
  }
  if (query.from) {
    hebrewQuery.cityFrom = mapToHebrew[query.from]
  }
  if (query.to) {
    hebrewQuery.cityTo = mapToHebrew[query.to]
  }
  return hebrewQuery
}
