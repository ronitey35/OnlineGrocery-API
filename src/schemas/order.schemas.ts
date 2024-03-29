import { text, varchar } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2';
import { integer } from 'drizzle-orm/pg-core';
import { timestamp } from 'drizzle-orm/pg-core';
import { time } from 'console';

export const Orders = pgTable('order', {
  id: text('id').notNull().$defaultFn(createId),
  productId: text('product_id').notNull(),
  sellerId: text('seller_id').notNull(),
  userId: text('user_id').notNull(),
  status: varchar('status', {
    enum: ['processing', 'delivered', 'cancelled']
  }),
  price: integer('price').notNull(),
  quantity: integer('quantity').notNull(),
  totalPrice: integer('total_price').notNull(),
  orderedAt: timestamp('ordered at', { mode: 'string', withTimezone: true })
    .notNull()
    .defaultNow(),
  estimatedDeliveryDate: timestamp('Estimated delivery date', {
    mode: 'date',
    withTimezone: true
  }).notNull(),
  deliveredAt: timestamp('delivered_at', {
    mode: 'string',
    withTimezone: true
  })
});
