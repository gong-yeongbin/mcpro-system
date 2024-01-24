import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('postback_daily', { schema: 'mcpro' })
export default class PostbackDaily {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  idx: number;

  @Column({ type: 'varchar', name: 'token' })
  token: string;

  @Column({ type: 'varchar', name: 'pub_id' })
  pubId: string;

  @Column({ type: 'varchar', name: 'sub_id', nullable: true })
  subId: string;

  @Column({ type: 'varchar', name: 'view_code' })
  viewCode: string;

  @Column({ type: 'int', name: 'click', default: 0 })
  click: number;

  @Column({ type: 'int', name: 'install', default: 0 })
  install: number;

  @Column({ type: 'int', name: 'registration', default: 0 })
  registration: number;

  @Column({ type: 'int', name: 'retention', default: 0 })
  retention: number;

  @Column({ type: 'int', name: 'purchase', default: 0 })
  purchase: number;

  @Column({ type: 'int', name: 'revenue', default: 0 })
  revenue: number;

  @Column({ type: 'int', name: 'etc1', default: 0 })
  etc1: number;

  @Column({ type: 'int', name: 'etc2', default: 0 })
  etc2: number;

  @Column({ type: 'int', name: 'etc3', default: 0 })
  etc3: number;

  @Column({ type: 'int', name: 'etc4', default: 0 })
  etc4: number;

  @Column({ type: 'int', name: 'etc5', default: 0 })
  etc5: number;

  @Column({ type: 'int', name: 'unregistered', default: 0 })
  unregistered: number;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
