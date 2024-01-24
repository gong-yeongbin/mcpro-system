import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('postback_event_adbrixremaster', { schema: 'mcpro' })
export default class PostbackEventAdbrixremaster {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  public idx: number;

  @Column('varchar', { name: 'view_code', length: 255 })
  public viewCode: string;

  @Column('varchar', { name: 'a_key', nullable: true, length: 255 })
  public aKey: string | null;

  @Column('varchar', { name: 'a_cookie', nullable: true, length: 255 })
  public aCookie: string | null;

  @Column('varchar', { name: 'a_ip', nullable: true, length: 255 })
  public aIp: string | null;

  @Column('varchar', { name: 'a_fp', nullable: true, length: 255 })
  public aFp: string | null;

  @Column('varchar', { name: 'a_country', nullable: true, length: 255 })
  public aCountry: string | null;

  @Column('varchar', { name: 'a_city', nullable: true, length: 255 })
  public aCity: string | null;

  @Column('varchar', { name: 'a_region', nullable: true, length: 255 })
  public aRegion: string | null;

  @Column('varchar', { name: 'a_appkey', nullable: true, length: 255 })
  public aAppkey: string | null;

  @Column('varchar', { name: 'm_publisher', nullable: true, length: 255 })
  public mPublisher: string | null;

  @Column('varchar', { name: 'm_sub_publisher', nullable: true, length: 255 })
  public mSubPublisher: string | null;

  @Column('varchar', { name: 'attr_adid', nullable: true, length: 255 })
  public attrAdid: string | null;

  @Column('varchar', {
    name: 'attr_event_datetime',
    nullable: true,
    length: 255,
  })
  public attrEventDatetime: string | null;

  @Column('varchar', {
    name: 'attr_event_timestamp',
    nullable: true,
    length: 255,
  })
  public attrEventTimestamp: string | null;

  @Column('varchar', { name: 'attr_seconds_gap', nullable: true, length: 255 })
  public attrSecondsGap: string | null;

  @Column('varchar', { name: 'adid', nullable: true, length: 255 })
  public adid: string | null;

  @Column('varchar', { name: 'idfv', nullable: true, length: 255 })
  public idfv: string | null;

  @Column('varchar', { name: 'ad_id_opt_out', nullable: true, length: 255 })
  public adIdOptOut: string | null;

  @Column('varchar', { name: 'device_os_version', nullable: true, length: 255 })
  public deviceOsVersion: string | null;

  @Column('varchar', { name: 'device_model', nullable: true, length: 255 })
  public deviceModel: string | null;

  @Column('varchar', { name: 'device_vendor', nullable: true, length: 255 })
  public deviceVendor: string | null;

  @Column('varchar', { name: 'device_resolution', nullable: true, length: 255 })
  public deviceResolution: string | null;

  @Column('varchar', { name: 'device_portrait', nullable: true, length: 255 })
  public devicePortrait: string | null;

  @Column('varchar', { name: 'device_platform', nullable: true, length: 255 })
  public devicePlatform: string | null;

  @Column('varchar', { name: 'device_network', nullable: true, length: 255 })
  public deviceNetwork: string | null;

  @Column('varchar', { name: 'device_wifi', nullable: true, length: 255 })
  public deviceWifi: string | null;

  @Column('varchar', { name: 'device_carrier', nullable: true, length: 255 })
  public deviceCarrier: string | null;

  @Column('varchar', { name: 'device_language', nullable: true, length: 255 })
  public deviceLanguage: string | null;

  @Column('varchar', { name: 'device_country', nullable: true, length: 255 })
  public deviceCountry: string | null;

  @Column('varchar', { name: 'device_build_id', nullable: true, length: 255 })
  public deviceBuildId: string | null;

  @Column('varchar', { name: 'package_name', nullable: true, length: 255 })
  public packageName: string | null;

  @Column('varchar', { name: 'appkey', nullable: true, length: 255 })
  public appkey: string | null;

  @Column('varchar', { name: 'sdk_version', nullable: true, length: 255 })
  public sdkVersion: string | null;

  @Column('varchar', { name: 'installer', nullable: true, length: 255 })
  public installer: string | null;

  @Column('varchar', { name: 'app_version', nullable: true, length: 255 })
  public appVersion: string | null;

  @Column('varchar', { name: 'event_name', nullable: true, length: 255 })
  public eventName: string | null;

  @Column('varchar', { name: 'event_datetime', nullable: true, length: 255 })
  public eventDatetime: string | null;

  @Column('varchar', { name: 'event_timestamp', nullable: true, length: 255 })
  public eventTimestamp: string | null;

  @Column('varchar', { name: 'event_timestamp_d', nullable: true, length: 255 })
  public eventTimestampD: string | null;

  @Column('text', { name: 'param_json', nullable: true })
  public paramJson: string | null;

  @Column('varchar', { name: 'cb_1', length: 255 })
  public cb_1: string;

  @Column('varchar', { name: 'cb_2', length: 255 })
  public cb_2: string;

  @Column('varchar', { name: 'cb_3', length: 255 })
  public cb_3: string;

  @Column('varchar', { name: 'cb_4', nullable: true, length: 255 })
  public cb_4: string | null;

  @Column('varchar', { name: 'cb_5', nullable: true, length: 255 })
  public cb_5: string | null;

  @Column('text', { name: 'originalUrl', nullable: true })
  public originalUrl: string | null;

  @Column('varchar', { name: 'send_time', nullable: true, length: 255 })
  public sendTime: string | null;

  @Column('datetime', {
    name: 'created_at',
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  public createdAt: Date;

  @Column('varchar', { name: 'product_id', nullable: true, length: 255 })
  public productId: string | null;

  @Column('varchar', { name: 'currency', nullable: true, length: 255 })
  public currency: string | null;

  @Column('int', { name: 'revenue', nullable: true })
  public revenue: number | null;

  @Column('varchar', { name: 'token', nullable: true, length: 255 })
  public token: string | null;

  @Column('text', { name: 'send_url', nullable: true })
  public sendUrl: string | null;

  @Column('varchar', { name: 'pub_id', nullable: true, length: 255 })
  public pubId: string | null;

  @Column('varchar', { name: 'sub_id', nullable: true, length: 255 })
  public subId: string | null;
}
