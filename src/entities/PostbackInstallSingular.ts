import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('postback_install_singular', { schema: 'mcpro' })
export default class PostbackInstallSingular {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  idx: string;

  @Column('varchar', { name: 'view_code', length: 255 })
  viewCode: string;

  @Column('varchar', { name: 'token', nullable: true, length: 255 })
  token: string | null;

  @Column('varchar', { name: 'attribution_ip', nullable: true, length: 255 })
  attributionIp: string | null;

  @Column('varchar', { name: 'os_version', nullable: true, length: 255 })
  osVersion: string | null;

  @Column('varchar', { name: 'app_version', nullable: true, length: 255 })
  appVersion: string | null;

  @Column('varchar', { name: 'idfa', nullable: true, length: 255 })
  idfa: string | null;

  @Column('varchar', { name: 'idfv', nullable: true, length: 255 })
  idfv: string | null;

  @Column('varchar', { name: 'gaid', nullable: true, length: 255 })
  gaid: string | null;

  @Column('varchar', {
    name: 'attribution_country',
    nullable: true,
    length: 255,
  })
  attributionCountry: string | null;

  @Column('varchar', { name: 'platform', nullable: true, length: 255 })
  platform: string | null;

  @Column('varchar', { name: 'time', nullable: true, length: 255 })
  time: string | null;

  @Column('varchar', { name: 'utc', nullable: true, length: 255 })
  utc: string | null;

  @Column('varchar', { name: 'click_time', nullable: true, length: 255 })
  clickTime: string | null;

  @Column('varchar', { name: 'click_utc', nullable: true, length: 255 })
  clickUtc: string | null;

  @Column('varchar', { name: 'sub1', nullable: true, length: 255 })
  sub1: string | null;

  @Column('varchar', { name: 'sub2', nullable: true, length: 255 })
  sub2: string | null;

  @Column('varchar', { name: 'sub3', nullable: true, length: 255 })
  sub3: string | null;

  @Column('varchar', { name: 'sub4', nullable: true, length: 255 })
  sub4: string | null;

  @Column('varchar', { name: 'sub5', nullable: true, length: 255 })
  sub5: string | null;

  @Column('text', { name: 'originalUrl', nullable: true })
  originalUrl: string | null;

  @Column('datetime', {
    name: 'created_at',
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  createdAt: Date;

  @Column('varchar', { name: 'send_time', nullable: true, length: 255 })
  sendTime: string | null;

  @Column('text', { name: 'send_url', nullable: true })
  sendUrl: string | null;

  @Column('varchar', { name: 'pub_id', nullable: true, length: 255 })
  pubId: string | null;

  @Column('varchar', { name: 'sub_id', nullable: true, length: 255 })
  subId: string | null;
}
