import { FetchDashboardDetailsDTO } from './dto/fetch-dashboard-details.dto';
export declare class DashboardService {
    constructor();
    details(query: FetchDashboardDetailsDTO): Promise<{
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
