"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../common/database/database.module");
const billing_manage_module_1 = require("./billing-module/billing-manage.module");
const payments_manage_module_1 = require("./payments-module/payments-manage.module");
const leases_manage_module_1 = require("./lease-module/leases-manage.module");
let FinancialModule = class FinancialModule {
};
exports.FinancialModule = FinancialModule;
exports.FinancialModule = FinancialModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            billing_manage_module_1.BillingManageModule,
            payments_manage_module_1.PaymentsManageModule,
            leases_manage_module_1.LeasesManageModule,
        ],
        exports: [billing_manage_module_1.BillingManageModule, payments_manage_module_1.PaymentsManageModule, leases_manage_module_1.LeasesManageModule],
    })
], FinancialModule);
//# sourceMappingURL=financial.module.js.map