
import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches } from 'class-validator';


export class RegisterUserDTO {
  @IsNotEmpty()
  @IsString()
  surname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
    message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long',
  })
  password: string;

  @IsNotEmpty()
  @IsNumber()
  pin: string;
}


export class LoginUserDTO {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
