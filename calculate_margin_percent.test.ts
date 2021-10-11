import {calculateMarginPercent} from './calculate_margin_percent'


it('test calculateMarginPercent should return 16.67', () => {
  const result = calculateMarginPercent(100,120)
  expect(parseFloat(result.toFixed(2))).toBe(16.67)
})
it('test calculateMarginPercent should return 0', () => {
  const result = calculateMarginPercent(100,100)
  expect(parseFloat(result.toFixed(2))).toBe(0)
})
it('test calculateMarginPercent should return -100', () => {
  const result = calculateMarginPercent(100,0)
  expect(parseFloat(result.toFixed(2))).toBe(-100)
})
it('test calculateMarginPercent should return -25', () => {
  const result = calculateMarginPercent(100,80)
  expect(parseFloat(result.toFixed(2))).toBe(-25)
})

it('test calculateMarginPercent should return -100', () => {
  const result = calculateMarginPercent(100,0)
  expect(parseFloat(result.toFixed(2))).toBe(-100)
})
it('test calculateMarginPercent should return 0', () => {
  const result = calculateMarginPercent(0,0)
  expect(parseFloat(result.toFixed(2))).toBe(0)
})
