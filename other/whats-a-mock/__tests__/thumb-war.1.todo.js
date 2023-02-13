// monkey-patching
import thumbWar from '../thumb-war'
import * as utils from '../utils'

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  // an anonymous function that always returns Kent C. Dodds as winner
  utils.getWinner = () => 'Kent C. Dodds'

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')

  expect(winner).toBe('Kent C. Dodds')

  utils.getWinner = originalGetWinner
})
