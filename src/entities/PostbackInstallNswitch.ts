import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('postback_install_nswitch', { schema: 'mcpro' })
export default class PostbackInstallNswitch {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  idx: string;

  @Column('varchar', { name: 'nsw_click_time', nullable: true, length: 255 })
  nsw_click_time: string | null;

  @Column('varchar', { name: 'nsw_conv_time', nullable: true, length: 255 })
  nsw_conv_time: string | null;

  @Column('varchar', { name: 'nsw_country_code', nullable: true, length: 255 })
  nsw_country_code: string | null;

  @Column('varchar', { name: 'nsw_google_aid', nullable: true, length: 255 })
  nsw_google_aid: string | null;

  @Column('varchar', { name: 'nsw_idfa', nullable: true, length: 255 })
  nsw_idfa: string | null;

  @Column('varchar', { name: 'nsw_gpr_click_time', nullable: true, length: 255 })
  nsw_gpr_click_time: string | null;

  @Column('varchar', { name: 'nsw_gpr_install_time', nullable: true, length: 255 })
  nsw_gpr_install_time: string | null;

  @Column('varchar', { name: 'nsw_installer', nullable: true, length: 255 })
  nsw_installer: string | null;

  @Column('varchar', { name: 'nsw_ip', nullable: true, length: 255 })
  nsw_ip: string | null;

  @Column('varchar', { name: 'nsw_lang', nullable: true, length: 255 })
  nsw_lang: string | null;

  @Column('varchar', { name: 'nsw_match_type', nullable: true, length: 255 })
  nsw_match_type: string | null;

  @Column('varchar', { name: 'nsw_model', nullable: true, length: 255 })
  nsw_model: string | null;

  @Column('varchar', { name: 'nsw_net', nullable: true, length: 255 })
  nsw_net: string | null;

  @Column('varchar', { name: 'nsw_net_op', nullable: true, length: 255 })
  nsw_net_op: string | null;

  @Column('varchar', { name: 'nsw_os_ver', nullable: true, length: 255 })
  nsw_os_ver: string | null;

  @Column('varchar', { name: 'nsw_tsdk_ver', nullable: true, length: 255 })
  nsw_tsdk_ver: string | null;

  @Column('varchar', { name: 'nsw_sub_media_id', nullable: true, length: 255 })
  nsw_sub_media_id: string | null;

  @Column('varchar', { name: 'custom1', nullable: true, length: 255 })
  custom1: string | null; // token

  @Column('varchar', { name: 'custom2', nullable: true, length: 255 })
  custom2: string | null; // clickid

  @Column('varchar', { name: 'custom3', nullable: true, length: 255 })
  custom3: string | null; // publisher_id

  @Column('varchar', { name: 'view_code', length: 255 })
  viewCode: string;

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
