import { Body, Controller,ForbiddenException,Get,Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import {MscustomeOtservCpayService} from './mscustome-otserv-cpay.service';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { CreateInformationDto } from './dto/validation.dto';

@Controller('v1/service/generateOTP')
@UsePipes(new ValidationPipe())
export class MscustomeOtservCpayController {
    constructor(private mscustomeOtservCpayService: MscustomeOtservCpayService){}

    @Post()
    @UseFilters(new HttpExceptionFilter())
     create(@Body() createInformationDto: CreateInformationDto) {
        try{
          console.log(createInformationDto);
          return this.mscustomeOtservCpayService.getAllInformation()
        }
        catch(e){
          throw new ForbiddenException();
        } 
      }
}
