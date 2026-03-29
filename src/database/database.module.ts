import { Module, Global } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Global() // Rend le DatabaseService accessible dans toute l'application
@Module({
  providers: [DatabaseService],
  exports: [DatabaseService], // Permet aux autres modules de l'utiliser
})
export class DatabaseModule {}
