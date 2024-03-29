import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
const client = postgres(
  `postgresql://postgres:admin@localhost:5432/productapi`
);
export const db = drizzle(client);
