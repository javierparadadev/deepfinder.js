
const defaultOptions = {
    token: '.',
    default_return: undefined,
    return_default_if_null: true,
}

const deepFind = (
    obj,
    path,
    options = {},
) => {
    const currentOptions = Object.assign({}, defaultOptions, options)
    const { token, default_return, return_default_if_null } = currentOptions
    let result = undefined
    path = path.split(token)
    if (path.length === 1 && path[0] === '') {
        path = []
    }
    result = recHelper(obj, path)

    if(result === undefined && default_return) {
        return default_return
    }

    if(result === null && default_return && return_default_if_null) {
        return default_return
    }

    return result
}

const recHelper = (obj, itPath) => {
    if (!itPath || !itPath.length) {
        return obj
    }

    let [currentPath, ...path] = itPath

    if (typeof obj == 'object' && !Array.isArray(obj)) {
        return recHelper(obj[currentPath], path)
    }

    if (Array.isArray(obj)) {
        if (currentPath === '*') {
            return obj.map(subObj => recHelper(subObj, path))
        }

        if (currentPath === '?') {
            for (let subObj of obj) {
                const result = recHelper(subObj, path)
                if (result) {
                    return result
                }
            }
            return
        }

        return recHelper(obj[Number(currentPath)], path)
    }
}

module.exports = {
    deepFind,
}