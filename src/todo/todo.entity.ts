import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ orderBy: { id: 'ASC' } })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ name: 'is_completed', default: false })
  isCompleted: boolean;

  @Column({ name: 'created_date' })
  createdDate: Date;

  @Column({ name: 'modified_date' })
  modifiedDate: Date;
}
