import { IsEmail, IsString } from "class-validator";

export class userSignUpDto {

    @IsString()
    userName: string;

    @IsString()
    password: string;

    @IsEmail()
    email: string
}