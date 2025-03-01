export class RegisterUserDto {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly phone: string,
  ) {
  }
}
