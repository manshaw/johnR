import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FetchDashboardDetailsDTO } from './dto/fetch-dashboard-details.dto';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
@ApiTags('Dashboard Module')
export class DashboardController {
  constructor(private readonly service: DashboardService) {}

  @Get('details')
  async signup(@Query() query: FetchDashboardDetailsDTO) {
    return await this.service.details(query);
  }
}
