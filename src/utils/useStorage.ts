function parse (str: string): object {
  return JSON.parse(str)
}

function stringify (obj: object): string {
  return JSON.stringify(obj)
}

export function setItem (key: string, obj: object): void {
  window.localStorage.setItem(key, stringify(obj))
}
export function getItem (key: string): object {
  return parse(window.localStorage.getItem(key) || 'null')
}
export function removeItem (key: string):void {
  window.localStorage.removeItem(key)
}
