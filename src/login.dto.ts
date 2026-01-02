import { IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @MinLength(1)
  @MaxLength(40)
  login: string;

  @IsString()
  @MinLength(1)
  @MaxLength(40)
  password: string;
}
