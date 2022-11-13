import { useSearchParams } from 'next/navigation'
import { CityNameTranslate, IsDriver } from './post.interfaces'
import { parseQuery } from './supported-cities.helpers'

export const useCityParams = (mapToHebrew: CityNameTranslate) => {
  const params = useSearchParams()
  const driver = params.get('driver') as IsDriver
  const from = params.get('from') as string
  const to = params.get('to') as string
  return parseQuery({ driver, from, to }, mapToHebrew)
}
