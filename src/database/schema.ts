import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

// Table "users" — représente les utilisateurs en base de données
export const users = pgTable('users', {
  id: serial('id').primaryKey(),                        // ID auto-incrémenté
  email: varchar('email', { length: 255 }).notNull().unique(), // Email unique obligatoire
  name: varchar('name', { length: 255 }),               // Nom optionnel
  createdAt: timestamp('created_at').defaultNow(),      // Date de création automatique
});
