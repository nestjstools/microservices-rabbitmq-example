import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { AmqpMessageBusModule } from '@nestjstools/microservices-rabbitmq';
import { Environment } from './env';
import { MessageHandlers } from './ui/amqp/message.handlers';
import { UserController } from './ui/http/user.controller';

const WORKER_MODULES = [...MessageHandlers];
const HTTP_SERVER_MODULES = [UserController];

@Module({
  imports: [
    AmqpMessageBusModule.forRoot([
      {
        name: 'event.bus',
        url: 'amqp://guest:guest@localhost:5672',
        exchange: 'user_service.exchange',
      }
    ]),
  ],
  controllers: Environment.isWorker ? WORKER_MODULES : HTTP_SERVER_MODULES,
  providers: [UserService],
})
export class AppModule {}
