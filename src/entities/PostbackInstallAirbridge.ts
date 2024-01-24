import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('idx_createdAt', ['createdAt', 'token'], {})
@Entity('postback_install_airbridge', { schema: 'mcpro' })
export default class PostbackInstallAirbridge {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  public idx: string;

  @Column('varchar', { name: 'click_id', length: 255 })
  public clickId: string;

  @Column('varchar', { name: 'sub_id2', length: 255 })
  public subId2: string;

  @Column('varchar', { name: 'uuid', nullable: true, length: 255 })
  public uuid: string | null;

  @Column('varchar', { name: 'google_aid', nullable: true, length: 255 })
  public googleAid: string | null;

  @Column('varchar', { name: 'ios_idfa', nullable: true, length: 255 })
  public iosIdfa: string | null;

  @Column('varchar', { name: 'ios_ifv', nullable: true, length: 255 })
  public iosIfv: string | null;

  @Column('tinyint', { name: 'limitAdTracking', nullable: true })
  public limitAdTracking: number | null;

  @Column('varchar', { name: 'device_model', nullable: true, length: 255 })
  public deviceModel: string | null;

  @Column('varchar', {
    name: 'device_manufacturer',
    nullable: true,
    length: 255,
  })
  public deviceManufacturer: string | null;

  @Column('varchar', { name: 'device_type', nullable: true, length: 255 })
  public deviceType: string | null;

  @Column('varchar', { name: 'os', nullable: true, length: 255 })
  public os: string | null;

  @Column('varchar', { name: 'os_version', nullable: true, length: 255 })
  public osVersion: string | null;

  @Column('varchar', { name: 'locale', nullable: true, length: 255 })
  public locale: string | null;

  @Column('varchar', { name: 'language', nullable: true, length: 255 })
  public language: string | null;

  @Column('varchar', { name: 'country', nullable: true, length: 255 })
  public country: string | null;

  @Column('varchar', { name: 'device_carrier', nullable: true, length: 255 })
  public deviceCarrier: string | null;

  @Column('varchar', { name: 'timezone', nullable: true, length: 255 })
  public timezone: string | null;

  @Column('varchar', { name: 'device_ip', nullable: true, length: 255 })
  public deviceIp: string | null;

  @Column('varchar', { name: 'packageName', nullable: true, length: 255 })
  public packageName: string | null;

  @Column('varchar', { name: 'iTunesAppID', nullable: true, length: 255 })
  public iTunesAppId: string | null;

  @Column('varchar', { name: 'appVersion', nullable: true, length: 255 })
  public appVersion: string | null;

  @Column('varchar', { name: 'appName', nullable: true, length: 255 })
  public appName: string | null;

  @Column('varchar', { name: 'sdkVersion', nullable: true, length: 255 })
  public sdkVersion: string | null;

  @Column('tinyint', { name: 'isUnique', nullable: true })
  public isUnique: number | null;

  @Column('varchar', { name: 'event_datetime', nullable: true, length: 255 })
  public eventDatetime: string | null;

  @Column('bigint', { name: 'event_timestamp', nullable: true })
  public eventTimestamp: number | null;

  @Column('bigint', { name: 'install_timestamp', nullable: true })
  public installTimestamp: number | null;

  @Column('varchar', { name: 'click_datetime', nullable: true, length: 255 })
  public clickDatetime: string | null;

  @Column('bigint', { name: 'click_timestamp', nullable: true })
  public clickTimestamp: number | null;

  @Column('text', { name: 'deeplink', nullable: true })
  public deeplink: string | null;

  @Column('varchar', { name: 'googleReferrer', nullable: true, length: 255 })
  public googleReferrer: string | null;

  @Column('varchar', { name: 'attributedChannel', nullable: true, length: 255 })
  public attributedChannel: string | null;

  @Column('varchar', {
    name: 'attributedMatchingType',
    nullable: true,
    length: 255,
  })
  public attributedMatchingType: string | null;

  @Column('varchar', { name: 'custom_param1', nullable: true, length: 255 })
  public customParam1: string | null;

  @Column('varchar', { name: 'custom_param2', nullable: true, length: 255 })
  public customParam2: string | null;

  @Column('varchar', { name: 'custom_param3', nullable: true, length: 255 })
  public customParam3: string | null;

  @Column('varchar', { name: 'custom_param4', nullable: true, length: 255 })
  public customParam4: string | null;

  @Column('varchar', { name: 'custom_param5', nullable: true, length: 255 })
  public customParam5: string | null;

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
