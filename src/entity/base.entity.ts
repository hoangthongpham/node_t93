import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm'

export class BaseEntity {
  @PrimaryColumn({ name: 'id', type: 'varchar','length': 128,'unique': true })
  id: string

  @CreateDateColumn({ name: 'deleted_at', type: 'timestamp','nullable': true })
  deletedAt: Date

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date
}
