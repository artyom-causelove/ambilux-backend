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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectEntity = void 0;
const typeorm_1 = require("typeorm");
const file_entity_1 = require("./file.entity");
let ObjectEntity = class ObjectEntity extends typeorm_1.BaseEntity {
    id;
    path;
    title;
    address;
    description;
    timeline;
    type;
    size;
    capacity;
    square;
    link;
    reverse;
    page;
    files;
    picture;
};
exports.ObjectEntity = ObjectEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ObjectEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ObjectEntity.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ObjectEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ObjectEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ObjectEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ObjectEntity.prototype, "timeline", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ObjectEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ObjectEntity.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ObjectEntity.prototype, "capacity", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ObjectEntity.prototype, "square", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ObjectEntity.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ObjectEntity.prototype, "reverse", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'page' }),
    __metadata("design:type", String)
], ObjectEntity.prototype, "page", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => file_entity_1.FileEntity, file => file.object),
    __metadata("design:type", Array)
], ObjectEntity.prototype, "files", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.OneToOne)(() => file_entity_1.FileEntity, file => file.object),
    __metadata("design:type", file_entity_1.FileEntity)
], ObjectEntity.prototype, "picture", void 0);
exports.ObjectEntity = ObjectEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'objects' })
], ObjectEntity);
//# sourceMappingURL=object.entity.js.map