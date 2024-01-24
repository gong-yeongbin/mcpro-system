import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('idx_createdAt', ['createdAt', 'token'], {})
@Entity('postback_event_decotra', { schema: 'mcpro' })
export default class PostbackEventDecotra {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  idx: string;

  @Column({ type: 'varchar', name: 'sub1', length: 255 })
  sub1: string;

  @Column({ type: 'varchar', name: 'sub2', length: 255 })
  sub2: string;

  @Column({ type: 'varchar', name: 'sub5', length: 255 })
  sub5: string;

  @Column({ type: 'varchar', name: 'sub7', nullable: true, length: 255 })
  sub7: string;

  @Column({ type: 'varchar', name: 'sub8', nullable: true, length: 255 })
  sub8: string;

  @Column({ type: 'varchar', name: 'country_code', nullable: true, length: 255 })
  countryCode: string;

  @Column({ type: 'varchar', name: 'device_brand', nullable: true, length: 255 })
  deviceBrand: string;

  @Column({ type: 'varchar', name: 'device_carrier', nullable: true, length: 255 })
  deviceCarrier: string;

  @Column({ type: 'varchar', name: 'device_ip', nullable: true, length: 255 })
  deviceIp: string;

  @Column({ type: 'varchar', name: 'device_model', nullable: true, length: 255 })
  deviceModel: string;

  @Column({ type: 'varchar', name: 'event_name', nullable: true, length: 255 })
  eventName: string;

  @Column({ type: 'text', name: 'originalUrl', nullable: true })
  originalUrl: string;

  @Column({ type: 'datetime', name: 'created_at', default: () => "'CURRENT_TIMESTAMP(6)'" })
  createdAt: Date;

  @Column({ type: 'varchar', name: 'view_code', length: 255 })
  viewCode: string;

  @Column({ type: 'varchar', name: 'send_time', nullable: true, length: 255 })
  sendTime: string;

  @Column({ type: 'varchar', name: 'token', nullable: true, length: 255 })
  token: string;

  @Column({ type: 'text', name: 'send_url', nullable: true })
  sendUrl: string;

  @Column({ type: 'varchar', name: 'pub_id', nullable: true, length: 255 })
  pubId: string;

  @Column({ type: 'varchar', name: 'sub_id', nullable: true, length: 255 })
  subId: string;
}
