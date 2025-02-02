import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class FetchDashboardDetailsDTO {
  @ApiProperty({ default: 'johnr' })
  @IsString()
  @MinLength(5)
  userId: string;
}
