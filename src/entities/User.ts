import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserLog } from './Entity';

@Entity('user', { schema: 'mcpro' })
export default class User {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  idx: string;

  @Column('varchar', { name: 'id', length: 255 })
  id: string;

  @Column('varchar', { name: 'password', length: 255 })
  password: string;

  @Column('varchar', { name: 'type', length: 255 })
  type: string;

  @Column('datetime', {
    name: 'created_at',
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  createdAt: Date;

  @Column('datetime', {
    name: 'updated_at',
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  updatedAt: Date;

  @Column('int', { name: 'type_idx', nullable: true })
  typeIdx: number | null;

  @OneToMany(() => UserLog, (userLog) => userLog.user)
  userLog: UserLog[];
}
