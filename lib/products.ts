export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
}

export const PRODUCTS: Product[] = [
  {
    id: 'playbox-01',
    name: 'Playbox 01 — Huggy Blue',
    description: 'A collectible soft vinyl companion from the Playbox after-hours series.',
    priceInCents: 4800,
  },
]

export const FEATURED_PRODUCT = PRODUCTS[0]

export function formatPrice(priceInCents: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(priceInCents / 100)
}

export const PRODUCT_IMAGE = '/toy-blue.png'
