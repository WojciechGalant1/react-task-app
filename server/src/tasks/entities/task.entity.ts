import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column({ default: false })
  completed: boolean;

  @Column('simple-array')
  tags: string[];

  @Column({ default: 'Low' })
  priority: string;

  @Column({ default: '' })
  details: string;

  @Column({ default: '' })
  startDate: string;

  @Column({ default: '' })
  endDate: string;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
