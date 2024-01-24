import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './Entity';

@Entity('user_log', { schema: 'mcpro' })
export default class UserLog {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'idx' })
  public idx: number;

  @Column('varchar', { name: 'ip_address', length: 255 })
  public ipAddress: string;

  @Column('datetime', {
    name: 'created_at',
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  public createdAt: Date;

  @Column('datetime', {
    name: 'updated_at',
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  public updatedAt: Date;

  @ManyToOne(() => User, (user) => user.userLog, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user', referencedColumnName: 'idx' }])
  public user: User;
}
