import { UserCreated } from '../../../user/event/user-created';
import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { EventMapper } from '../../../event.mapper';

@Controller()
export class UserCreatedMethodHandler {
  @EventPattern(EventMapper.UserCreated)
  async fromMethodLevel(message: UserCreated): Promise<void> {
    console.log('Sending sms ...');
    return Promise.resolve(undefined);
  }
}
