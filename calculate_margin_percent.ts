export const calculate_margin_percent = (buy_price: number, sell_price: number) : number => {
  if (sell_price === 0 || (sell_price - buy_price) === 0) return 0
  return (sell_price - buy_price) / sell_price * 100
}
