import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { FileEntity } from './file.entity';

@Entity({ name: 'objects' })
export class ObjectEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  title: string;

  @Column()
  address: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  timeline: string;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  size: string;

  @Column({ nullable: true })
  capacity: string;

  @Column({ nullable: true })
  square: string;
  
  @Column({ nullable: true })
  link: string;
  
  @Column({ default: false })
  reverse: boolean;
  
  @Column({ default: 'page' })
  page: string;

  @OneToMany(() => FileEntity, file => file.object)
  files: FileEntity[];

  @JoinColumn()
  @OneToOne(() => FileEntity, file => file.object)
  picture: FileEntity;
}
