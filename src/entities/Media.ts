import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Campaign } from './Entity';

@Entity('media', { schema: 'mcpro' })
export default class Media {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  idx: number;

  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @Column({ type: 'boolean', name: 'status', default: true })
  status: number;

  @Column({ type: 'text', name: 'mediaPostbackInstallUrlTemplate' })
  mediaPostbackInstallUrlTemplate: string;

  @Column({ type: 'text', name: 'mediaPostbackEventUrlTemplate' })
  mediaPostbackEventUrlTemplate: string;

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

  @OneToMany(() => Campaign, (campaign) => campaign.media)
  campaign: Campaign[];
}
