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
const index_1 = require("../index");
class Clz {
    foo(n, m) {
        return n * 2;
    }
}
__decorate([
    index_1.notNull,
    __param(1, index_1.required),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], Clz.prototype, "foo", null);
console.log(new Clz().foo(10));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBMkM7QUFFM0M7SUFHSSxHQUFHLENBQUMsQ0FBUyxFQUFZLENBQVM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7Q0FDSjtBQUhHO0lBREMsZUFBTztJQUNRLFdBQUEsZ0JBQVEsQ0FBQTs7Ozs4QkFFdkI7QUFHTCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMifQ==