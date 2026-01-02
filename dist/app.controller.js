"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const aws_sdk_1 = require("aws-sdk");
const app_service_1 = require("./app.service");
const object_entity_1 = require("./object.entity");
const login_dto_1 = require("./login.dto");
const message_entity_1 = require("./message.entity");
const message_dto_1 = require("./message.dto");
const str = 'mwozOLi7WDxFxMjk89ikJyMuEcMyovtC';
let AppController = class AppController {
    appService;
    bucket;
    constructor(appService) {
        this.appService = appService;
        this.bucket = new aws_sdk_1.S3({
            secretAccessKey: process.env.S3_SECRET,
            accessKeyId: process.env.S3_KEY,
            region: 'ru-central1',
            endpoint: 'https://storage.yandexcloud.net',
            httpOptions: {
                timeout: 100000
            }
        });
        this.bucket.config.setPromisesDependency(Promise);
    }
    getObjects() {
        return object_entity_1.ObjectEntity.find({
            relations: ['picture', 'files'],
            order: { id: 'asc' }
        });
    }
    getObject(path) {
        return object_entity_1.ObjectEntity.findOne({
            where: { path },
            relations: ['files']
        });
    }
    getFile(prefix, title, response) {
        const url = this.bucket.getSignedUrl('getObject', {
            Bucket: process.env.S3_BUCKET,
            Key: `${prefix}/${title}`,
            Expires: 60 * 5
        });
        response.status(302).redirect(url);
    }
    login(loginDto) {
        if (loginDto.login === process.env.login &&
            loginDto.password === process.env.password) {
            return { value: str };
        }
        return false;
    }
    async createMessages(messageDto) {
        const created = message_entity_1.MessageEntity.create(messageDto);
        const res = await message_entity_1.MessageEntity.save(created);
        return true;
    }
    messages(auth) {
        const token = auth.split(' ')[1];
        if (token === str) {
            return message_entity_1.MessageEntity.find();
        }
        return false;
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('/objects'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getObjects", null);
__decorate([
    (0, common_1.Get)('/objects/:path'),
    __param(0, (0, common_1.Param)('path')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getObject", null);
__decorate([
    (0, common_1.Get)(':prefix/:title'),
    __param(0, (0, common_1.Param)('prefix')),
    __param(1, (0, common_1.Param)('title')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getFile", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('messages'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_dto_1.MessageDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createMessages", null);
__decorate([
    (0, common_1.Get)('messages'),
    __param(0, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "messages", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map