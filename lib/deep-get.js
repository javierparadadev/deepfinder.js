
const defaultOptions = {
    token: '.',
    default_return: undefined,
    default_if_err: undefined,
    raise_err: false,
}

const deepGet = (
    obj,
    path,
    options,
) => {
    const currentOptions = Object.assign({}, defaultOptions, options)
    const { token, default_return, default_if_err, raise_err } = currentOptions
    let result = undefined
    try {
        path = path.split(token)
        if (path == ['']) {
            path = undefined
        }
        result = recHelper(obj, path)
    } catch(err) {
        if (raise_err) {
            throw err
        }
        if (default_if_err) {
            return default_if_err
        }
    }

    if (result) {
        return result
    }

    return default_return
}

const recHelper = (obj, path) => {
    if (!path || !path.length) {
        return obj
    }

    [currentPath, ...path] = path

    if (typeof obj == 'object') {
        return recHelper(obj[currentPath], path)
    }

    if (Array.isArray(obj)) {
        if (currentPath == '*') {
            return obj.map(subObj => recHelper(subObj, path))
        }

        if (currentPath == '?') {
            obj.forEach(subObj => {
                let result = recHelper(subObj, path)
                if (result) {
                    return result
                }
            })
            return
        }

        return recHelper(obj[Number(currentPath)], path)
    }

    return
}