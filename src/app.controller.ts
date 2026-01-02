
import { Body, Controller, Get, Headers, Param, Post, Res } from '@nestjs/common';

import { S3 } from 'aws-sdk';

import { AppService } from './app.service';
import { ObjectEntity } from './object.entity';
import { LoginDto } from './login.dto';
import { MessageEntity } from './message.entity';
import { MessageDto } from './message.dto';

const str = 'mwozOLi7WDxFxMjk89ikJyMuEcMyovtC';

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

  @Post('login')
  login(
    @Body() loginDto: LoginDto
  ) {
    if (
      loginDto.login === process.env.login &&
      loginDto.password === process.env.password
    ) {
      return { value: str };
    }

    return false;
  }

  @Post('messages')
  async createMessages(@Body() messageDto: MessageDto) {
    const created = MessageEntity.create(messageDto as any);
    const res = await MessageEntity.save(created);

    return true;
  }

  @Get('messages')
  messages(
    @Headers('Authorization') auth: string
  ) {
    const token = auth.split(' ')[1];
    if (token === str) {
      return MessageEntity.find();
    }

    return false;
  }
}
