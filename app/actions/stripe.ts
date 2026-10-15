'use server'

import { PRODUCTS } from '@/lib/products'
import { stripe } from '@/lib/stripe'

export async function startCheckoutSession(productId: string) {
  const product = PRODUCTS.find((item) => item.id === productId)
  if (!product) throw new Error('Product not found')

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded_page',
    redirect_on_completion: 'never',
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: { name: product.name, description: product.description },
        unit_amount: product.priceInCents,
      },
      quantity: 1,
    }],
    mode: 'payment',
  })

  return session.client_secret
}
