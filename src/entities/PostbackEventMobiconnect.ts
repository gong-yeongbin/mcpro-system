import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('postback_event_mobiconnect', { schema: 'mcpro' })
export default class PostbackEventMobiconnect {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  public idx: string;

  @Column('varchar', { name: 'view_code', length: 255 })
  public viewCode: string;

  @Column('varchar', { name: 'token', nullable: true, length: 255 })
  public token: string | null;

  @Column('varchar', { name: 'pub_id2', nullable: true, length: 255 })
  public pubId2: string | null;

  @Column('varchar', { name: 'sub_pub_id', nullable: true, length: 255 })
  public subPubId: string | null;

  @Column('varchar', { name: 'click_id', nullable: true, length: 255 })
  public clickId: string | null;

  @Column('varchar', { name: 'gaid', nullable: true, length: 255 })
  public gaid: string | null;

  @Column('varchar', { name: 'idfa', nullable: true, length: 255 })
  public idfa: string | null;

  @Column('varchar', { name: 'android_id', nullable: true, length: 255 })
  public androidId: string | null;

  @Column('varchar', { name: 'os', nullable: true, length: 255 })
  public os: string | null;

  @Column('varchar', { name: 'ip', nullable: true, length: 255 })
  public ip: string | null;

  @Column('varchar', { name: 'carrier', nullable: true, length: 255 })
  public carrier: string | null;

  @Column('varchar', { name: 'country_code', nullable: true, length: 255 })
  public countryCode: string | null;

  @Column('varchar', { name: 'language', nullable: true, length: 255 })
  public language: string | null;

  @Column('bigint', { name: 'click_timestamp', nullable: true })
  public clickTimestamp: string | null;

  @Column('bigint', { name: 'install_timestamp', nullable: true })
  public installTimestamp: string | null;

  @Column('bigint', { name: 'event_timestamp', nullable: true })
  public eventTimestamp: string | null;

  @Column('varchar', { name: 'event_id', nullable: true, length: 255 })
  public eventId: string | null;

  @Column('varchar', { name: 'revenue', nullable: true, length: 255 })
  public revenue: string | null;

  @Column('varchar', { name: 'currency', nullable: true, length: 255 })
  public currency: string | null;

  @Column('varchar', { name: 'custom1', nullable: true, length: 255 })
  public custom1: string | null;

  @Column('varchar', { name: 'custom2', nullable: true, length: 255 })
  public custom2: string | null;

  @Column('varchar', { name: 'custom3', nullable: true, length: 255 })
  public custom3: string | null;

  @Column('text', { name: 'originalUrl', nullable: true })
  public originalUrl: string | null;

  @Column('datetime', {
    name: 'created_at',
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  public createdAt: Date;

  @Column('varchar', { name: 'send_time', nullable: true, length: 255 })
  public sendTime: string | null;

  @Column('text', { name: 'send_url', nullable: true })
  public sendUrl: string | null;

  @Column('varchar', { name: 'pub_id', nullable: true, length: 255 })
  public pubId: string | null;

  @Column('varchar', { name: 'sub_id', nullable: true, length: 255 })
  public subId: string | null;
}
