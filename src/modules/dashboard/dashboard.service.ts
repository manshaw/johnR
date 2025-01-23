import { Injectable } from '@nestjs/common';
import { FetchDashboardDetailsDTO } from './dto/fetch-dashboard-details.dto';

@Injectable()
export class DashboardService {
  constructor() {}

  async details(query: FetchDashboardDetailsDTO){
    return "initial version"
  }
}
