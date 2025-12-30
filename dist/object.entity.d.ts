import { BaseEntity } from 'typeorm';
import { FileEntity } from './file.entity';
export declare class ObjectEntity extends BaseEntity {
    id: number;
    path: string;
    title: string;
    address: string;
    description: string;
    timeline: string;
    type: string;
    size: string;
    capacity: string;
    square: string;
    link: string;
    reverse: boolean;
    page: string;
    files: FileEntity[];
    picture: FileEntity;
}
