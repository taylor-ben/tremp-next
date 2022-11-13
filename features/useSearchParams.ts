import { useQueryParam } from 'use-query-params'
import { CityNameTranslate, IsDriver } from './post.interfaces'
import { parseQuery } from './supported-cities.helpers'

export const useCityParams = (mapToHebrew: CityNameTranslate) => {
  const [driver, setDriverParam] = useQueryParam<IsDriver>('driver')
  const [from, setFromParam] = useQueryParam<string>('from')
  const [to, setToParam] = useQueryParam<string>('to')
  const params = parseQuery({ driver, from, to }, mapToHebrew)

  return { params, setDriverParam: setDriverParam, setFromParam, setToParam }
}
