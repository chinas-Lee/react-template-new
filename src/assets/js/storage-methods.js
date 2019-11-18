/**
 * 缓存操作方法
*/
/**
 * 存储localStorage
 */
const _setLocalStorage = (name, content) => {
  if (!name) return false
  typeof content !== 'string' && (content = JSON.stringify(content))
  window.localStorage.setItem(name, content)
}

/**
 * 获取字符串的localStorage
 */
const _getLocalStorage = name => {
  if (!name) return false
  return window.localStorage.getItem(name) || ''
}

/**
 * 获取对象的localStorage
 */
const _getLocalStorageObject = name => {
  if (!name) return false
  const object = window.localStorage.getItem(name)
  try {
    return JSON.parse(object)
  } catch (e) {
    return object
  }
}

/**
 * 删除localStorage
 */
const _removeLocalStorage = name => {
  if (!name) return false
  window.localStorage.removeItem(name)
}

/**
 * 删除多个localStorage
 */
const _removeMultipleLocalStorage = (...args) => {
  if (args.length <= 0) return false
  args.forEach((arg) => {
    window.localStorage.removeItem(arg)
  })
}

/**
 * 存储sessionStorage
 */
const _setSessionStorage = (name, content) => {
  if (!name) return false
  typeof content !== 'string' && (content = JSON.stringify(content))
  window.sessionStorage.setItem(name, content)
}

/**
 * 获取字符串的sessionStorage
 */
const _getSessionStorage = name => {
  if (!name) return false
  return window.sessionStorage.getItem(name) || ''
}

/**
 * 获取对象的sessionStorage
 */
const _getSessionStorageObject = name => {
  if (!name) return false
  const object = window.sessionStorage.getItem(name)
  try {
    return JSON.parse(object)
  } catch (e) {
    return object
  }
}

/**
 * 删除单个sessionStorage
 */
const _removeSessionStorage = name => {
  if (!name) return false
  window.sessionStorage.removeItem(name)
}

/**
 * 删除多个sessionStorage
 */
const _removeMultipleSessionStorage = (...args) => {
  if (args.length <= 0) return false
  args.forEach((arg) => {
    window.sessionStorage.removeItem(arg)
  })
}

export {
  _setLocalStorage,
  _getLocalStorage,
  _getSessionStorageObject,
  _removeLocalStorage,
  _removeMultipleLocalStorage,
  _setSessionStorage,
  _getLocalStorageObject,
  _getSessionStorage,
  _removeSessionStorage,
  _removeMultipleSessionStorage
}
