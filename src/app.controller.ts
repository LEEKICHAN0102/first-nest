import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  home() {
    return '영화 API 만들기';
  }
}
