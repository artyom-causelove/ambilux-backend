import { BaseEntity } from 'typeorm';
export declare class MessageEntity extends BaseEntity {
    id: number;
    email: string;
    name: string;
    text: string;
}
