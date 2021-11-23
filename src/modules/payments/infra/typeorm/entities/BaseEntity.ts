import { CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

export class BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @CreateDateColumn({ default: new Date() })
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}