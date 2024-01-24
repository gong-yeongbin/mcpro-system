import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('postback_install_appsflyer', { schema: 'mcpro' })
export default class PostbackInstallAppsflyer {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  public idx: number;

  @Column('varchar', { name: 'clickid', length: 255 })
  public clickid: string;

  @Column('varchar', { name: 'af_siteid', length: 255 })
  public afSiteid: string;

  @Column('varchar', { name: 'af_c_id', length: 255 })
  public afCId: string;

  @Column('varchar', { name: 'advertising_id', nullable: true, length: 255 })
  public advertisingId: string | null;

  @Column('varchar', { name: 'idfa', nullable: true, length: 255 })
  public idfa: string | null;

  @Column('varchar', { name: 'idfv', nullable: true, length: 255 })
  public idfv: string | null;

  @Column('varchar', { name: 'install_time', nullable: true, length: 255 })
  public installTime: string | null;

  @Column('varchar', { name: 'country_code', nullable: true, length: 255 })
  public countryCode: string | null;

  @Column('varchar', { name: 'language', nullable: true, length: 255 })
  public language: string | null;

  @Column('varchar', { name: 'click_time', nullable: true, length: 255 })
  public clickTime: string | null;

  @Column('varchar', { name: 'device_carrier', nullable: true, length: 255 })
  public deviceCarrier: string | null;

  @Column('varchar', { name: 'device_ip', nullable: true, length: 255 })
  public deviceIp: string | null;

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
