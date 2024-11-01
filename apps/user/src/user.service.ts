import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHealth(): string {
    return 'User Service Up and Running!';
  }
}
