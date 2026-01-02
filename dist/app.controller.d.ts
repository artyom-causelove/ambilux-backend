import { AppService } from './app.service';
import { ObjectEntity } from './object.entity';
import { LoginDto } from './login.dto';
import { MessageEntity } from './message.entity';
import { MessageDto } from './message.dto';
export declare class AppController {
    private readonly appService;
    private bucket;
    constructor(appService: AppService);
    getObjects(): Promise<ObjectEntity[]>;
    getObject(path: string): Promise<ObjectEntity | null>;
    getFile(prefix: string, title: string, response: any): void;
    login(loginDto: LoginDto): false | {
        value: string;
    };
    createMessages(messageDto: MessageDto): Promise<boolean>;
    messages(auth: string): false | Promise<MessageEntity[]>;
}
