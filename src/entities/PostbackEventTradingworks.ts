import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('idx_createdAt', ['createdAt', 'token'], {})
@Entity('postback_event_tradingworks', { schema: 'mcpro' })
export default class PostbackEventTradingworks {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  public idx: string;

  @Column('varchar', { name: 'transaction_id', length: 255 })
  public transactionId: string;

  @Column('varchar', { name: 'publisher_id', length: 255 })
  public publisherId: string;

  @Column('varchar', { name: 'adid', length: 255 })
  public adid: string;

  @Column('varchar', { name: 'idfa', nullable: true, length: 255 })
  public idfa: string | null;

  @Column('varchar', { name: 'country_code', nullable: true, length: 255 })
  public countryCode: string | null;

  @Column('varchar', { name: 'device_brand', nullable: true, length: 255 })
  public deviceBrand: string | null;

  @Column('varchar', { name: 'device_carrier', nullable: true, length: 255 })
  public deviceCarrier: string | null;

  @Column('varchar', { name: 'device_ip', nullable: true, length: 255 })
  public deviceIp: string | null;

  @Column('varchar', { name: 'device_model', nullable: true, length: 255 })
  public deviceModel: string | null;

  @Column('varchar', { name: 'device_type', nullable: true, length: 255 })
  public deviceType: string | null;

  @Column('varchar', { name: 'cb_param1', nullable: true, length: 255 })
  public cbParam1: string | null;

  @Column('varchar', { name: 'cb_param2', nullable: true, length: 255 })
  public cbParam2: string | null;
  @Column('varchar', { name: 'action', nullable: true, length: 255 })
  public action: string | null;

  @Column('text', { name: 'originalUrl', nullable: true })
  public originalUrl: string | null;

  @Column('datetime', {
    name: 'created_at',
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  public createdAt: Date;

  @Column('varchar', { name: 'view_code', length: 255 })
  public viewCode: string;

  @Column('varchar', { name: 'send_time', nullable: true, length: 255 })
  public sendTime: string | null;

  @Column('varchar', { name: 'token', nullable: true, length: 255 })
  public token: string | null;

  @Column('text', { name: 'send_url', nullable: true })
  public sendUrl: string | null;

  @Column('varchar', { name: 'pub_id', nullable: true, length: 255 })
  public pubId: string | null;

  @Column('varchar', { name: 'sub_id', nullable: true, length: 255 })
  public subId: string | null;
}
