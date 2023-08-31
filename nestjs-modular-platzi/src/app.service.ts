import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private readonly apiKey: string,
    private configService: ConfigService,
    @Inject('TASKS') private readonly tasks: any[],
  ) {}
  getHello(): string {
    console.log(this.tasks);

    return `Hello World! ${this.apiKey}`;
  }
}
