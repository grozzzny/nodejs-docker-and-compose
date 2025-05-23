import { IsEmail, IsOptional, IsString, Length } from 'class-validator'

export class CreateUserDto {
  @IsString()
  @Length(2, 30)
  username: string

  @IsOptional()
  @IsString()
  @Length(2, 200)
  about?: string

  @IsOptional()
  @IsString()
  avatar?: string

  @IsEmail()
  email: string

  @IsString()
  password: string
}
