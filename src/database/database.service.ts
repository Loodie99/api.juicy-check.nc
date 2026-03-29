import { Injectable, OnModuleInit } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private pool: Pool;
  public db: ReturnType<typeof drizzle>;

  async onModuleInit() {
    // Création du pool de connexions PostgreSQL
    this.pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });

    // Initialisation de Drizzle avec le pool et le schéma
    this.db = drizzle(this.pool, { schema });

    console.log('✅ Connexion à la base de données établie');
  }
}
