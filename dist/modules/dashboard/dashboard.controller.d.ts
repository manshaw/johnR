import { FetchDashboardDetailsDTO } from './dto/fetch-dashboard-details.dto';
import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly service;
    constructor(service: DashboardService);
    signup(query: FetchDashboardDetailsDTO): Promise<{
        error: boolean;
        code: import("@nestjs/common").HttpStatus;
        message: string;
        data: any;
    } | {
        error: boolean;
        code: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    }>;
}
