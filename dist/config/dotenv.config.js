"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SWAGGER_URL = exports.PORT = void 0;
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
exports.PORT = PORT;
const SWAGGER_URL = process.env.SWAGGER_URL;
exports.SWAGGER_URL = SWAGGER_URL;
//# sourceMappingURL=dotenv.config.js.map