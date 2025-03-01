import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AmqpTransport, ExchangeType } from '@nestjstools/microservices-rabbitmq';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    strategy: new AmqpTransport({
      url: 'amqp://guest:guest@localhost:5672',
      autoCreate: true,
      bindingKeys: ['user_service.event.#'],
      queue: 'user_service.event',
      exchange: 'user_service.exchange',
      exchangeType: ExchangeType.TOPIC,
    }),
  });

  await app.listen();
}
bootstrap();
