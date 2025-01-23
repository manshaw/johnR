import { HttpStatus } from '@nestjs/common';

export const sendResponse = async (data: any) => {
  return data
    ? {
        error: false,
        code: HttpStatus.FOUND,
        message: 'success',
        data,
      }
    : {
        error: true,
        code: HttpStatus.NOT_FOUND,
        message: 'no data found',
      };
};
