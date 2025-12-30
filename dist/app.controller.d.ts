import { AppService } from './app.service';
import { ObjectEntity } from './object.entity';
export declare class AppController {
    private readonly appService;
    private bucket;
    constructor(appService: AppService);
    getObjects(): Promise<ObjectEntity[]>;
    getObject(path: string): Promise<ObjectEntity | null>;
    getFile(prefix: string, title: string, response: any): void;
}
