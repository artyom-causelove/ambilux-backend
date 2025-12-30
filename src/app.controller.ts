
import { Controller, Get, Param, Res } from '@nestjs/common';

import { S3 } from 'aws-sdk';

import { AppService } from './app.service';
import { ObjectEntity } from './object.entity';

@Controller()
export class AppController {
  private bucket: S3;

  constructor(private readonly appService: AppService) {
    this.bucket = new S3({
      secretAccessKey: process.env.S3_SECRET,
      accessKeyId: process.env.S3_KEY,
      region: 'ru-central1',
      endpoint: 'https://storage.yandexcloud.net',
      httpOptions: {
        timeout: 100000
      }
    });
    this.bucket.config.setPromisesDependency(Promise);
  }

  @Get('/objects')
  getObjects() {
    return ObjectEntity.find({
      relations: ['picture', 'files'],
      order: { id: 'asc' }
    });
  }

  @Get('/objects/:path')
  getObject(
    @Param('path') path: string
  ) {
    return ObjectEntity.findOne({
      where: { path },
      relations: ['files']
    });
  }

  @Get(':prefix/:title')
  getFile(
    @Param('prefix') prefix: string,
    @Param('title') title: string,
    @Res() response
  ) {
    const url = this.bucket.getSignedUrl('getObject', {
      Bucket: process.env.S3_BUCKET,
      Key: `${prefix}/${title}`,
      Expires: 60 * 5
    });

    response.status(302).redirect(url);
  }
}
