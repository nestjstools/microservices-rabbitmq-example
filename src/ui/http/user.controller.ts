import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { RegisterUserDto } from '../../user/dto/register-user.dto';
import { Response } from 'express';
import { AmqpMessageBus, MessageBus, RoutingMessage } from '@nestjstools/microservices-rabbitmq';
import { UserCreated } from '../../user/event/user-created';
import { EventMapper } from '../../event.mapper';

@Controller()
export class UserController {

  constructor(private readonly userService: UserService, @MessageBus('event.bus') private readonly eventBus: AmqpMessageBus) {
  }

  @Post('/signup')
  public signUp(@Body() registerDto: RegisterUserDto, @Res() res: Response) {

    const id = this.userService.register(registerDto);

    this.eventBus.dispatch(new RoutingMessage(
      new UserCreated(id, registerDto.email, registerDto.name, registerDto.phone),
      EventMapper.UserCreated,
    ))

    return res.status(201).send({ id });
  }
}
