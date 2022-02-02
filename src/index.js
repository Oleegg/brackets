module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false
  const config = Object.fromEntries(bracketsConfig)
  const steck = []
  for (let i = 0; i < str.length; i++) {
    for (let key in config) {
      if (str[i] == key) {
        if (!steck.length) {
          steck.push(str[i])
          // если не пустой стек
        } else {
          if (str[i] == config[key]) {
            if (steck[steck.length - 1] == str[i]) {
              steck.pop()
            } else {
              steck.push(str[i])
            }
          } else {
            steck.push(str[i])
          }
        }
        //если закрывающийся
      } else {
        if (str[i] == config[key] && key == steck[steck.length - 1]) {
          steck.pop()
        }
      }
    }
  }
  return !steck.length
}
