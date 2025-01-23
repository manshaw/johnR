import { Injectable } from '@nestjs/common';
import { FetchDashboardDetailsDTO } from './dto/fetch-dashboard-details.dto';
import { DUMMY_DATABASE } from 'src/data/dummy';
import { sendResponse } from 'src/helper/helper.service';

@Injectable()
export class DashboardService {
  constructor() {}

  async details(query: FetchDashboardDetailsDTO) {
    const data = DUMMY_DATABASE.find((data) => data.userId === query.userId);
    return await sendResponse(data); // here in this code i am check data variable is empty or not
  }
}
