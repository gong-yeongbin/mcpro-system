import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Advertising } from './Entity';

@Entity('tracker', { schema: 'mcpro' })
export default class Tracker {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  idx: number;

  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @Column({ type: 'varchar', name: 'type', default: 'tracker' })
  type: string;

  @Column({ type: 'text', name: 'trackerTrackingUrlTemplate' })
  trackerTrackingUrlTemplate: string;

  @Column({ type: 'text', name: 'mecrossPostbackInstallUrlTemplate' })
  mecrossPostbackInstallUrlTemplate: string;

  @Column({ type: 'text', name: 'mecrossPostbackEventUrlTemplate' })
  mecrossPostbackEventUrlTemplate: string;

  @Column({ type: 'boolean', name: 'status', default: true })
  status: number;

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

  @OneToMany(() => Advertising, (advertising) => advertising.tracker)
  advertising: Advertising[];
}
