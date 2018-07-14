module.exports = function(movements, array) {
    const length = array.length
    const result = new Array(array.length)
    const toPositions = new Set(movements.values())
    if (movements.size !== toPositions.size) {
        throw new Error('first parameter must have movements to distinct positions')
    }
    let fromPosition = 0
    let toPosition = 0
    while (toPosition < length || fromPosition < length) {
        if (movements.has(fromPosition)) {
            const to = movements.get(fromPosition)
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
