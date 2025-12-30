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
exports.FileEntity = void 0;
const typeorm_1 = require("typeorm");
const object_entity_1 = require("./object.entity");
let FileEntity = class FileEntity extends typeorm_1.BaseEntity {
    id;
    path;
    width;
    height;
    object;
};
exports.FileEntity = FileEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FileEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FileEntity.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], FileEntity.prototype, "width", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], FileEntity.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => object_entity_1.ObjectEntity, object => object.files),
    __metadata("design:type", object_entity_1.ObjectEntity)
], FileEntity.prototype, "object", void 0);
exports.FileEntity = FileEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'files' })
], FileEntity);
//# sourceMappingURL=file.entity.js.map