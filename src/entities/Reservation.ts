import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Campaign } from './Entity';

@Entity('reservation', { schema: 'mcpro' })
export default class Reservation {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  idx: number;

  @Column({ type: 'varchar', name: 'token' })
  token: string;

  @Column({ type: 'text', name: 'oldCampaignName' })
  oldCampaignName: string;

  @Column({ type: 'text', name: 'newCampaignName' })
  newCampaignName: string;

  @Column({ type: 'boolean', name: 'status', default: false })
  status: boolean;

  @Column({ type: 'timestamp', name: 'reserved_at', default: () => 'CURRENT_TIMESTAMP' })
  reservedAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ type: 'text', name: 'oldTrackerTrackingUrl' })
  oldTrackerTrackingUrl: string;

  @Column({ type: 'text', name: 'newTrackerTrackingUrl' })
  newTrackerTrackingUrl: string;

  @ManyToOne(() => Campaign, (campaign) => campaign.reservation)
  @JoinColumn({ name: 'campaign' })
  campaign: Campaign;
}
