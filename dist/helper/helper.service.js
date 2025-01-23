"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const common_1 = require("@nestjs/common");
const sendResponse = async (data) => {
    return data
        ? {
            error: false,
            code: common_1.HttpStatus.FOUND,
            message: 'success',
            data,
        }
        : {
            error: true,
            code: common_1.HttpStatus.NOT_FOUND,
            message: 'no data found',
        };
};
exports.sendResponse = sendResponse;
//# sourceMappingURL=helper.service.js.map