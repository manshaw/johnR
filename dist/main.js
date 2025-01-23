"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_config_1 = require("./config/swagger.config");
const dotenv_config_1 = require("./config/dotenv.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({});
    await (0, swagger_config_1.swaggerConfig)(app);
    await app.listen(dotenv_config_1.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map