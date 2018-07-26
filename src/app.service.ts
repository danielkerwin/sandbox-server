import { Injectable } from '@nestjs/common';

import * as speakeasy from 'speakeasy';

@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!';
  }

  async generateTotp(secret: string): Promise<string> {
    return await speakeasy.totp({ secret, encoding: 'base32' });
  }

}
