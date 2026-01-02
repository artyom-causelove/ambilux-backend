import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class MessageDto {
  @IsString()
  @MinLength(1)
  @MaxLength(60)
  name: string;

  @IsEmail()
  @MinLength(3)
  @MaxLength(254)
  email: string;

  @IsString()
  @MinLength(1)
  @MaxLength(2000)
  text: string;
}
