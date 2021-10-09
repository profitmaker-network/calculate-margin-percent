import {calculate_margin} from './calculate_margin'


it('test calculate_margin ', () => {
  const result = calculate_margin(100,50)
  expect(result).toBe(50)
})
it('test calculate_margin should return 0', () => {
  const result = calculate_margin(100,100)
  expect(result).toBe(0)
})
