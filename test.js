const rearrange = require('./')

const test = require('tape')
const tapSpec = require('tap-spec')

test('rearrange', function(t) {
    t.deepEqual(rearrange(new Map([
        [0, 0]
    ]), [1, 2, 3]), [1, 2, 3], 'swapping same index (top item)')

    t.deepEqual(rearrange(new Map([
        [2, 2]
    ]), [1, 2, 3]), [1, 2, 3], 'swapping same index (bottom item)')

    t.deepEqual(rearrange(new Map([
        [1, 1]
    ]), [1, 2, 3]), [1, 2, 3], 'swapping same index (middle item)')

    t.deepEqual(rearrange(new Map([
        [2, 0]
    ]), [1, 2, 3]), [3, 1, 2], 'moving bottom to top')

    t.deepEqual(rearrange(new Map([
        [0, 2]
    ]), [1, 2, 3]), [2, 3, 1], 'moving top to bottom')

    t.deepEqual(rearrange(new Map([
        [0, 2],
        [2, 0]
    ]), [1, 2, 3]), [3, 2, 1], 'swapping top and bottom')

    t.deepEqual(rearrange(new Map([
        [0, 1],
        [1, 0]
    ]), [1, 2, 3]), [2, 1, 3], 'swapping top and midle')

    t.deepEqual(rearrange(new Map([
        [2, 1],
        [1, 2]
    ]), [1, 2, 3]), [1, 3, 2], 'swapping bottom and middle')

    t.deepEqual(rearrange(new Map([
        [6, 1],
        [5, 4],
        [7, 2]
    ]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [0, 6, 7, 1, 5, 2, 3, 4, 8, 9], 'moving bottom elements to top')

    t.deepEqual(rearrange(new Map([
        [0, 6],
        [2, 8],
        [3, 5]
    ]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 4, 5, 6, 7, 3, 0, 8, 2, 9], 'moving top elements to bottom')

    t.deepEqual(rearrange(new Map([
        [0, 8],
        [6, 3],
        [2, 5]
    ]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 3, 4, 6, 5, 2, 7, 8, 0, 9], 'moving elements to top and bottom')

    t.deepEqual(rearrange(new Map(), [1, 2, 3, 4]),
        [1, 2, 3, 4], 'no changes (empty Map)')

    t.deepEqual(rearrange(new Map(), []),
        [], 'no changes (empty Map) and empty list')

    t.throws(() => rearrange(new Map([
        [0, 2],
        [1, 2]
    ]), [1, 2, 3]), 'changes parameter must have movements to distinct positions',
    'if there are movements to the same position throws an error')

    t.end()
})

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout)
