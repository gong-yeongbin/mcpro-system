import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Advertiser, Campaign, Tracker } from './Entity';

@Entity('advertising', { schema: 'mcpro' })
export default class Advertising {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  idx: number;

  @Column({ type: 'varchar', name: 'name', nullable: true })
  name: string;

  @Column({ type: 'varchar', name: 'platform' })
  platform: string;

  @Column({ type: 'varchar', name: 'image_url', nullable: true })
  imageUrl: string;

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

  @OneToMany(() => Campaign, (campaign) => campaign.advertising)
  campaign: Campaign[];

  @ManyToOne(() => Advertiser, (advertiser) => advertiser.advertising, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'advertiser', referencedColumnName: 'idx' }])
  advertiser: Advertiser;

  @ManyToOne(() => Tracker, (tracker) => tracker.advertising, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'tracker', referencedColumnName: 'idx' }])
  tracker: Tracker;
}
