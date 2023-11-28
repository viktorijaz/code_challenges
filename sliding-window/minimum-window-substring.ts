const createHashMap = (str: string): Record<string, number> => {
  let smallerHashMap: Record<string, number> = {}
  for (let i = 0; i < str.length; i++) {
    let character = str[i]
    smallerHashMap[character] =
      smallerHashMap[character] === undefined
        ? 1
        : smallerHashMap[character] + 1
  }
  return smallerHashMap
}

const compareString = (str1: string, str2: string): boolean => {
  let containerHashMap = createHashMap(str1)
  let smallerHashMap = createHashMap(str2)
  let contains: boolean = true
  const keys = Object.keys(smallerHashMap).forEach((key) => {
    const condition = containerHashMap[key] >= smallerHashMap[key]
    contains = contains && condition
  })
  return contains
}
const minimumWindowSubstring = (container: string, smaller: string): string => {
  let window = ''
  let L = 0,
    R = 0
  let smallestWindow = ''
  while (R < container.length) {
    window = container.substring(L, R)

    if (!compareString(window, smaller)) {
      R++
    } else {
      if (smallestWindow === '') {
        smallestWindow = window
      } else {
        smallestWindow =
          window.length < smallestWindow.length ? window : smallestWindow
      }
      L++
    }
  }
  return smallestWindow
}

console.log(minimumWindowSubstring('PKTEAPBCMAKE', 'ABC'))
