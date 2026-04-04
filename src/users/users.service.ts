import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { user } from '../database/schema';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll() {
    return await this.databaseService.db.select().from(user);
  }
}
