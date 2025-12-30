import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';

import { ObjectEntity } from './object.entity';

@Entity({ name: 'files' })
export class FileEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;
  
  @Column({ nullable: true })
  width: number;

  @Column({ nullable: true })
  height: number;

  @ManyToOne(() => ObjectEntity, object => object.files)
  object: ObjectEntity;
}
