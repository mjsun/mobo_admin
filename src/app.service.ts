import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getStore(): string {
    return 'All stores';
  }

  getLocation(): string {
    return 'All locations'
  }
}
