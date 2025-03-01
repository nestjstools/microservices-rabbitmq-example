import { IMessageHandler, MessageHandler } from '@nestjstools/microservices-rabbitmq';
import { UserCreated } from '../../../user/event/user-created';
import { EventMapper } from '../../../event.mapper';

@MessageHandler(EventMapper.UserCreated)
export class SendEmailOnUserCreatedHandler implements IMessageHandler<UserCreated> {
  constructor() {}

  async handle(message: UserCreated): Promise<void> {
    console.log('Sending email ...');
    return Promise.resolve(undefined);
  }
}
