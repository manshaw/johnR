import { HttpStatus } from '@nestjs/common';
export declare const sendResponse: (data: any) => Promise<{
    error: boolean;
    code: HttpStatus;
    message: string;
    data: any;
} | {
    error: boolean;
    code: HttpStatus;
    message: string;
    data?: undefined;
}>;
