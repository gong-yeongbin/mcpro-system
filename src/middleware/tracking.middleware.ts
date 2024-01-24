import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class TrackingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: NextFunction): any {
    req.query.token = ['', undefined, '{token}'].includes(req.query.token) ? '' : req.query.token;
    req.query.click_id = ['', undefined, '{click_id}'].includes(req.query.click_id) ? '' : req.query.click_id;
    req.query.pub_id = ['', undefined, '{pub_id}'].includes(req.query.pub_id) ? '' : req.query.pub_id;
    req.query.sub_id = ['', undefined, '{sub_id}'].includes(req.query.sub_id) ? '' : req.query.sub_id;
    req.query.adid = ['', undefined, '{adid}'].includes(req.query.adid) ? '' : req.query.adid;
    req.query.idfa = ['', undefined, '{idfa}'].includes(req.query.idfa) ? '' : req.query.idfa;
    req.query.uuid = ['', undefined, '{uuid}'].includes(req.query.uuid) ? '' : req.query.uuid;

    next();
  }
}
