import { SendEmailOnUserCreatedHandler } from './handler/send-email-on-user-created.handler';
import { UserCreatedMethodHandler } from './handler/user-created-method.handler';

export const MessageHandlers = [
  SendEmailOnUserCreatedHandler,
  UserCreatedMethodHandler,
]
