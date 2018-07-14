module.exports = function(changes, array) {
    const length = array.length
    const result = new Array(array.length)
    const toPositions = new Set(changes.values())
    if (changes.size !== toPositions.size) {
        throw new Error('first parameter must have movements to distinct positions')
    }
    let fromPosition = 0
    let toPosition = 0
    while (toPosition < length || fromPosition < length) {
        if (changes.has(fromPosition)) {
            const to = changes.get(fromPosition)
            result[to] = array[fromPosition]
            ++fromPosition
        } else if (toPositions.has(toPosition)) {
            ++toPosition
        } else {
            result[toPosition] = array[fromPosition]
            ++fromPosition
            ++toPosition
        }
    }
    return result
}
