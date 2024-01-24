import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('postback', { schema: 'mcpro' })
export default class Postback {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  idx: number;

  @Column({ type: 'varchar', name: 'token' })
  token: string;

  @Column({ type: 'varchar', name: 'carrier', nullable: true })
  carrier: string;

  @Column({ type: 'varchar', name: 'country', nullable: true })
  country: string;

  @Column({ type: 'varchar', name: 'language', nullable: true })
  language: string;

  @Column({ type: 'varchar', name: 'ip', nullable: true })
  ip: string;

  @Column({ type: 'varchar', name: 'adid', nullable: true })
  adid: string;

  @Column({ type: 'varchar', name: 'click_id', nullable: true })
  click_id: string;

  @Column({ type: 'varchar', name: 'impressionCode' })
  impressionCode: string;

  @Column({ type: 'varchar', name: 'event_name', nullable: true })
  event_name: string;

  @Column({ type: 'timestamp', name: 'click_time', nullable: true })
  click_time: Date;

  @Column({ type: 'timestamp', name: 'install_time', nullable: true })
  install_time: Date;

  @Column({ type: 'timestamp', name: 'event_time', nullable: true })
  event_time: Date;

  @Column({ type: 'varchar', name: 'revenue', default: 0 })
  revenue: number;

  @Column({ type: 'varchar', name: 'currency', nullable: true })
  currency: string;

  @Column({ type: 'varchar', name: 'send_time', nullable: true })
  send_time: Date;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
