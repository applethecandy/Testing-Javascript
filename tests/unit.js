import { solveQuadraticEquation } from '../app/quadratic-equation.js';

import assert from 'assert'

it('Правильно подсчитаны корни [1.5, 1.5] при a, b, c = 4, -12, 9', () => {
    assert.deepEqual(solveQuadraticEquation(4, -12, 9), [1.5, 1.5])
})

it('Правильно подсчитаны корни [1, -0.4] при a, b, c = 5, -3, -2', () => {
    assert.deepEqual(solveQuadraticEquation(5, -3, -2), [1, -0.4])
})

it('Правильно подсчитано отсутствие корней при a, b, c = 5, 6, 7', () => {
    assert.deepEqual(solveQuadraticEquation(5, 6, 7), [])
})