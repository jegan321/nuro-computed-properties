export function createdComputedProperty(computeFunction: () => void) {
  let dependentProperties: string[] = []
  let proxy = new Proxy(
    {},
    {
      get(obj, prop: any) {
        if (!dependentProperties.includes(prop)) {
          dependentProperties.push(prop)
        }
      }
    }
  )
  computeFunction.apply(proxy)
  function getKey(this: any) {
    let values: any[] = []
    dependentProperties.forEach(prop => {
      values.push(this[prop])
    })
    return JSON.stringify(values)
  }
  let cache = new Map()
  return function(this: any) {
    let key = getKey.apply(this)
    if (cache.has(key)) {
      return cache.get(key)
    } else {
      let value = computeFunction.apply(this)
      cache.set(key, value)
      return value
    }
  }
}
