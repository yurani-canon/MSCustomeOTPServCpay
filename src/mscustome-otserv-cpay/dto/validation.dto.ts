import { IsIn, IsNotEmpty, IsString, Length, NotEquals } from "class-validator";

export class CreateInformationDto {
    @Length(18)
    @IsNotEmpty()
    @NotEquals(' ')
    transactionNumber: string;

    @IsString()
    @Length(2, 4)
    @IsNotEmpty()
    @IsIn(['SMS','SMTP'])
    @NotEquals(' ')
    otpMethodType: string;

    @IsString()
    @Length(30)
    otpMethodValue: string;
    
}
