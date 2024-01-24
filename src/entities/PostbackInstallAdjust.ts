import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('postback_install_adjust', { schema: 'mcpro' })
export default class PostbackInstallAdjust {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  idx: string;

  @Column('varchar', { name: 'view_code', length: 255 })
  viewCode: string;

  @Column('varchar', { name: 'cp_token', nullable: true, length: 255 })
  cpToken: string | null;

  @Column('varchar', { name: 'publisher_id', nullable: true, length: 255 })
  publisherId: string | null;

  @Column('varchar', { name: 'click_id', nullable: true, length: 255 })
  clickId: string | null;

  @Column('varchar', { name: 'uid', nullable: true, length: 255 })
  uid: string | null;

  @Column('varchar', { name: 'app_id', nullable: true, length: 255 })
  appId: string | null;

  @Column('varchar', { name: 'app_version', nullable: true, length: 255 })
  appVersion: string | null;

  @Column('varchar', { name: 'network_name', nullable: true, length: 255 })
  networkName: string | null;

  @Column('varchar', { name: 'campaign_name', nullable: true, length: 255 })
  campaignName: string | null;

  @Column('varchar', { name: 'adgroup_name', nullable: true, length: 255 })
  adgroupName: string | null;

  @Column('varchar', { name: 'adid', nullable: true, length: 255 })
  adid: string | null;

  @Column('varchar', { name: 'idfa', nullable: true, length: 255 })
  idfa: string | null;

  @Column('varchar', { name: 'idfv', nullable: true, length: 255 })
  idfv: string | null;

  @Column('varchar', { name: 'android_id', nullable: true, length: 255 })
  androidId: string | null;

  @Column('varchar', { name: 'gps_adid', nullable: true, length: 255 })
  gpsAdid: string | null;

  @Column('varchar', { name: 'ip_address', nullable: true, length: 255 })
  ipAddress: string | null;

  @Column('varchar', { name: 'click_time', nullable: true, length: 255 })
  clickTime: string | null;

  @Column('varchar', { name: 'engagement_time', nullable: true, length: 255 })
  engagementTime: string | null;

  @Column('varchar', { name: 'installed_at', nullable: true, length: 255 })
  installedAt: string | null;

  @Column('varchar', { name: 'isp', nullable: true, length: 255 })
  isp: string | null;

  @Column('varchar', { name: 'country', nullable: true, length: 255 })
  country: string | null;

  @Column('varchar', { name: 'language', nullable: true, length: 255 })
  language: string | null;

  @Column('varchar', { name: 'device_name', nullable: true, length: 255 })
  deviceName: string | null;

  @Column('varchar', { name: 'device_type', nullable: true, length: 255 })
  deviceType: string | null;

  @Column('varchar', { name: 'os_name', nullable: true, length: 255 })
  osName: string | null;

  @Column('varchar', { name: 'sdk_version', nullable: true, length: 255 })
  sdkVersion: string | null;

  @Column('varchar', { name: 'os_version', nullable: true, length: 255 })
  osVersion: string | null;

  @Column('text', { name: 'originalUrl', nullable: true })
  originalUrl: string | null;

  @Column('varchar', { name: 'send_time', nullable: true, length: 255 })
  sendTime: string | null;

  @Column('datetime', {
    name: 'created_at',
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  createdAt: Date;

  @Column('varchar', { name: 'token', nullable: true, length: 255 })
  token: string | null;

  @Column('text', { name: 'send_url', nullable: true })
  sendUrl: string | null;

  @Column('varchar', { name: 'pub_id', nullable: true, length: 255 })
  pubId: string | null;

  @Column('varchar', { name: 'sub_id', nullable: true, length: 255 })
  subId: string | null;
}
