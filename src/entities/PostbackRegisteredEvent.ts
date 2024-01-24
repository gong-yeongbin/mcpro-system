import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Campaign } from './Entity';

@Entity('postback_registered_event', { schema: 'mcpro' })
export default class PostbackRegisteredEvent {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  idx: number;

  @Column({ type: 'varchar', name: 'tracker' })
  tracker: string;

  @Column({ type: 'varchar', name: 'admin' })
  admin: string;

  @Column({ type: 'varchar', name: 'media' })
  media: string;

  @Column({ type: 'boolean', name: 'status', default: true })
  status: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ManyToOne(() => Campaign, (campaign) => campaign.postbackRegisteredEvent, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'token', referencedColumnName: 'token' }])
  token: Campaign;
}
