import { BaseEntity } from 'typeorm';
import { ObjectEntity } from './object.entity';
export declare class FileEntity extends BaseEntity {
    id: number;
    path: string;
    width: number;
    height: number;
    object: ObjectEntity;
}
