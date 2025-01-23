"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
const dotenv_config_1 = require("./dotenv.config");
const swaggerConfig = async (app) => {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Open Table Backend APIs Documentation')
        .setDescription('')
        .setVersion('1.0')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup(dotenv_config_1.SWAGGER_URL, app, documentFactory);
};
exports.swaggerConfig = swaggerConfig;
//# sourceMappingURL=swagger.config.js.map