
const defaultOptions = {
    token: '.',
    defaultReturn: undefined,
    returnDefaultIfNull: true,
}

const defaultTokens = ['*', '?']

const deepFind = (
    obj,
    path,
    options = {},
) => {
    const currentOptions = Object.assign({}, defaultOptions, options)
    const { token, defaultReturn, returnDefaultIfNull } = currentOptions
    if (defaultTokens.includes(token)) {
        throw new Error(`Token must be different from: ${defaultTokens}`)
    }
    let result
    path = path.split(token)
    if (path.length === 1 && path[0] === '') {
        path = []
    }
    result = recHelper(obj, path)

    if(result === undefined && defaultReturn) {
        return defaultReturn
    }

    if(result === null && defaultReturn && returnDefaultIfNull) {
        return defaultReturn
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