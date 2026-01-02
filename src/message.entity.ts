import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'messages' })
export class MessageEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 254, nullable: false })
  email: string;

  @Column({ length: 60, nullable: false })
  name: string;

  @Column({ length: 2000, nullable: false })
  text: string;
}
