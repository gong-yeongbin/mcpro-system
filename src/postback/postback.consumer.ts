import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Postback } from '../entities/Entity';

@Processor('postback')
export class PostbackConsumer {
  constructor(
    @InjectRepository(Postback)
    private readonly postbackRepository: Repository<Postback>,
  ) {}

  @Process()
  async postbackHandler(job: Job) {
    const postback: Postback = job.data;
    await this.postbackRepository.save({ ...postback });
  }
}
