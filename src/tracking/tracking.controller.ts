import { Query, Redirect } from '@nestjs/common';
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { TrackingDto } from './dto/tracking.dto';
import { TrackingService } from './tracking.service';

interface ITrackingLog {
  token: string;
  adid: string;
  idfa: string;
}

@Controller('tracking')
export class TrackingController {
  private collectedData: ITrackingLog[] = [];

  constructor(private readonly trackingService: TrackingService) {}

  @Get()
  @Redirect()
  async tracking(@Req() request: Request, @Query() query: TrackingDto) {
    const redirectUrl: string = await this.trackingService.tracking(request, query);

    // console.log(`[ mecrosspro ---> tracker ] redirectUrl:${redirectUrl}`);
    return { url: redirectUrl, statusCode: 302 };
  }

  private async saveData() {
    const data_length: number = this.collectedData.length;
    const save_data: ITrackingLog[] = this.collectedData.splice(0, data_length);
  }
}
