import { Inject, Injectable } from '@nestjs/common';
import * as moment from 'moment-timezone';
import { decodeUnicode } from 'src/util';
import { TrackingDto } from './dto/tracking.dto';
import { RedisClientType } from 'redis';

@Injectable()
export class TrackingService {
  constructor(
    @Inject('REDIS_CLIENT') private readonly redis: RedisClientType,
  ) {}
  async tracking(request: any, query: TrackingDto): Promise<string> {
    const originalUrl: string = decodeUnicode(
      `${request.protocol}://${request.headers.host}${request.url}`,
    );
    // console.log(`[ media ---> mecrosspro ] ${originalUrl}`);

    const token: string = query.token;
    const click_id: string = query.click_id;
    const pub_id: string = query.pub_id;
    const sub_id: string = query.sub_id;
    const adid: string = query.adid;
    const idfa: string = query.idfa;
    const uuid: string = query.uuid;

    const impressionCode: string = await this.redis.get(
      `${token}:${pub_id}:${sub_id}`,
    );

    const trackerTrackingUrl = await this.redis.hGet(
      token,
      'trackerTrackingUrl',
    );

    const date: string = moment().tz('Asia/Seoul').format('YYYYMMDD');

    const isClickValidation: number = +(await this.redis.hGet(
      `${date}:click`,
      `${token}:${pub_id}:${sub_id}`,
    ));

    if (!isClickValidation) {
      await this.redis.hSet(`${date}:click`, `${token}:${pub_id}:${sub_id}`, 1);
      await this.redis.expire(`${date}:click`, 60 * 60 * 24 * 1);
    } else {
      await this.redis.hIncrBy(
        `${date}:click`,
        `${token}:${pub_id}:${sub_id}`,
        1,
      );
    }

    return (
      trackerTrackingUrl
        .replace(/{clickid}/gi, click_id)
        .replace(/{af_siteid}/gi, impressionCode)
        .replace(/{m_publisher}/gi, impressionCode)
        .replace(/{publisher_id}/gi, impressionCode)
        .replace(/{view_code}/gi, impressionCode)
        .replace(/{psid}/gi, impressionCode)
        .replace(/{cb_2}/gi, impressionCode)
        .replace(/{view_code}}/gi, impressionCode)
        .replace(/{clickid}/gi, click_id)
        .replace(/{click_id}/gi, click_id)
        .replace(/{transaction_id}/gi, click_id)
        .replace(/{cb_3}/gi, click_id)
        .replace(/{sub1}/gi, token)
        .replace(/{sub2}/gi, impressionCode)
        .replace(/{sub3}/gi, click_id)
        .replace(/{af_c_id}/gi, token)
        .replace(/{cb_1}/gi, token)
        .replace(/{cp_token}/gi, token)
        .replace(/{cb_param1}/gi, token)
        .replace(/{custom_param1}/gi, token)
        .replace(/{token}/gi, token)
        .replace(/{m_adid}/gi, adid ? adid : idfa)
        .replace(/{advertising_id}/gi, adid)
        .replace(/{adid}/gi, adid)
        .replace(/{gaid}/gi, adid)
        .replace(/{ifa}/gi, idfa)
        .replace(/{idfa}/gi, idfa)
        .replace(/{m_sub_publisher}/, '')
        .replace(/{cb_param2}/gi, '')
        .replace(/{custom1}/gi, token)
        .replace(/{custom2}/gi, click_id)
        .replace(/{custom3}/gi, impressionCode)
        .replace(/{cb_5}/gi, uuid) + `&uuid=${uuid}`
    );
  }
}

//   async convertTrackerTrackingUrl(redisData: any, query: TrackingDto, viewCode: string): Promise<string> {
//     const tracker: string = redisData.tracker;
//     const trackerTrackingUrl: string = redisData.trackerTrackingUrl;
//     const adid: string = query.adid;
//     const idfa: string = query.idfa;
//     const deviceId: string = query.adid ? query.adid : query.idfa;

//     let convertedTrackerTrackingUrl: string = null;

//     switch (tracker) {
//       case 'appsflyer':
//         convertedTrackerTrackingUrl = trackerTrackingUrl
//           .replace('{clickid}', query.click_id) //click id
//           .replace('{af_siteid}', viewCode) //view code
//           .replace('{af_c_id}', query.token) //campaign token
//           .replace('{advertising_id}', query.adid) //android device id
//           .replace('{idfa}', query.idfa); //ios device id
//         // .replace('{af_adset_id}', '')
//         // .replace('{af_ad_id}', '')
//         // .replace('{af_ip}', '') //device ip
//         // .replace('{af_ua}', '') //user agent
//         // .replace('{af_lang}', ''); //device language
//         break;
//       case 'adbrixremaster':
//         convertedTrackerTrackingUrl = trackerTrackingUrl
//           .replace('{m_adid}', deviceId) //device id
//           .replace('{m_publisher}', viewCode) //view code
//           // .replace('{m_sub_publisher}', '') //view code
//           .replace('{cb_1}', query.token) //campaign code
//           .replace('{cb_2}', viewCode) //view code
//           .replace('{cb_3}', query.click_id) //click id
//           // .replace('{cb_4}', '')
//           .replace('{cb_5}', query.uuid);
//         break;
//       case 'adjust':
//         convertedTrackerTrackingUrl = trackerTrackingUrl
//           .replace(/{adid}/gi, adid) //view code
//           .replace(/{idfa}/gi, idfa) //view code
//           .replace(/{publisher_id}/gi, viewCode) //view code
//           .replace(/{cp_token}/gi, query.token) //campaign code
//           .replace(/{click_id}/gi, query.click_id); //click id
//         // .replace(/{uid}/gi, '');
//         break;
//       case 'singular':
//         convertedTrackerTrackingUrl = trackerTrackingUrl
//           .replace(/{idfa}/gi, idfa)
//           .replace(/{gaid}/gi, adid)
//           .replace(/{campaignName}/gi, '')
//           .replace(/{campaignId}/gi, '')
//           .replace(/{click_id}/gi, query.click_id) //click id
//           .replace(/{token}/gi, query.token) //view code
//           .replace(/{view_code}/gi, viewCode) //campaign code
//           .replace(/{psid}/gi, viewCode) //campaign code
//           .replace(/{sub3}/gi, query.click_id)
//           .replace(/{sub4}/gi, '')
//           .replace(/{sub5}/gi, '');
//         break;
//       case 'tradingworks':
//         convertedTrackerTrackingUrl = trackerTrackingUrl
//           .replace(/{transaction_id}/gi, query.click_id)
//           .replace(/{publisher_id}/gi, viewCode)
//           .replace(/{idfa}/gi, idfa)
//           .replace(/{adid}/gi, adid)
//           .replace(/{cb_param1}/gi, query.token)
//           .replace(/{cb_param2}/gi, '');
//         break;
//       case 'airbridge':
//         convertedTrackerTrackingUrl = trackerTrackingUrl
//           .replace(/{click_id}/gi, query.click_id)
//           .replace(/{publisher_id}/gi, viewCode)
//           .replace(/{gaid}/gi, adid)
//           .replace(/{idfa}/gi, idfa)
//           .replace(/{custom_param1}/gi, query.token)
//           .replace(/{custom_param2}/gi, '')
//           .replace(/{custom_param3}/gi, '')
//           .replace(/{custom_param4}/gi, '')
//           .replace(/{custom_param5}/gi, '');
//         break;
//       case 'mobiconnect':
//         convertedTrackerTrackingUrl = trackerTrackingUrl
//           .replace(/{click_id}/gi, query.click_id)
//           .replace(/{view_code}}/gi, viewCode)
//           .replace(/{pub_sub_id2}}/gi, '')
//           .replace(/{gaid}/gi, adid)
//           .replace(/{ifa}/gi, idfa)
//           .replace(/{token}/gi, query.token)
//           .replace(/{custom_id2}/gi, '')
//           .replace(/{custom_id3}/gi, '');

//         break;
//     }

//     return !query.uuid ? convertedTrackerTrackingUrl : convertedTrackerTrackingUrl + `&uuid=${query.uuid}`;
//   }
