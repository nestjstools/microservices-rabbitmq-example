import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UserService {
  register(message: RegisterUserDto): string {
    console.log(`Registered user with data: ${JSON.stringify(message)}`);

    return 'user-id';
  }
}
