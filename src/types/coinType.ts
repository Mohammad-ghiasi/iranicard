export type coins = coin[]

export interface coin {
  _id: string
  name: string
  fa_name: string
  symbol: string
  slug: string
  is_sell_to_customer_active: number
  is_fast_sell_to_customer_active: number
  is_buy_from_customer_active: number
  logo: string
  dollar_price: number
  sell_to_iranicard_currency_price: number
  buy_from_iranicard_currency_price: number
  fast_sell_to_iranicard_currency_price: number
  buy_from_iranicard_network_list: BuyFromIranicardNetworkList[]
  sell_to_iranicard_network_list: SellToIranicardNetworkList[]
  is_price_maker_active: number
  quotation: Quotation
  dailyChangePercent?: number
  order: number
  stock_status?: string
  stock_label: string
  stock_description: string
  currencyUnit: number;
}

export interface BuyFromIranicardNetworkList {
  network: string
  name: string
  addressRegex?: string
  coin: string
  withdrawEnable: boolean
  depositEnable: boolean
  withdrawMin: string
  withdrawMax?: string
  withdrawFee: string
  sameAddress: number
  memoRegex: string
  tradeEnable: boolean
}

export interface SellToIranicardNetworkList {
  network: string
  name: string
  addressRegex?: string
  coin: string
  withdrawEnable: boolean
  depositEnable: boolean
  withdrawMin: string
  withdrawMax?: string
  withdrawFee: string
  sameAddress: boolean
  memoRegex: string
  tradeEnable: boolean
}

export interface Quotation {
  maxPrice: string
  minPrice: string
  dailyChangePercent: string
}
