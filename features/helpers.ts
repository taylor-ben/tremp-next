export const keys = <T extends object>(obj: T) =>
  Object.keys(obj) as (keyof T)[]

export const removeUndefined = <T extends object>(object: T) => {
  const copiedObject = { ...object }
  keys(copiedObject).forEach(
    (key) => copiedObject[key] === undefined && delete copiedObject[key]
  )
  return copiedObject
}
