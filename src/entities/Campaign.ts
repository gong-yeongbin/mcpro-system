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
import {
  Advertising,
  Media,
  PostbackRegisteredEvent,
  Reservation,
} from './Entity';

@Entity('campaign', { schema: 'mcpro' })
export default class Campaign {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  idx: number;

  @Column({ type: 'varchar', name: 'token' })
  token: string;

  @Column({ type: 'varchar', name: 'appkey', nullable: true })
  appkey: string;

  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @Column({ type: 'varchar', name: 'type' })
  type: string;

  @Column({ type: 'boolean', name: 'status', default: true })
  status: boolean;

  @Column('text', { name: 'trackerTrackingUrl' })
  trackerTrackingUrl: string;

  @Column('text', { name: 'mecrossTrackingUrl' })
  mecrossTrackingUrl: string;

  @Column({ type: 'boolean', name: 'block', default: false })
  block: boolean;

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

  @ManyToOne(() => Advertising, (advertising) => advertising.campaign, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'advertising', referencedColumnName: 'idx' }])
  advertising: Advertising;

  @ManyToOne(() => Media, (media) => media.campaign, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'media', referencedColumnName: 'idx' }])
  media: Media;

  @OneToMany(
    () => PostbackRegisteredEvent,
    (postbackRegisteredEvent) => postbackRegisteredEvent.token,
  )
  postbackRegisteredEvent: PostbackRegisteredEvent[];

  @OneToMany(() => Reservation, (reservation) => reservation.campaign)
  reservation: Reservation[];
}
