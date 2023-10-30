import { Body, Controller,ForbiddenException,Post,Put, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import {MscustomeOtservCpayService} from './mscustome-otserv-cpay.service';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { CreateInformationDto } from './dto/validation.dto';

@Controller('v1/service/generateOTP')
@UsePipes(new ValidationPipe())
export class MscustomeOtservCpayController {
    constructor(private mscustomeOtservCpayService: MscustomeOtservCpayService){}

    @Put()
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

      @Post()
      getHeaderAll(){
        return this.mscustomeOtservCpayService.getHeaderAll();
      }

     /* @UseFilters(new HttpExceptionFilter())
      getHeaderAll(){
        try{
          return this.mscustomeOtservCpayService.getHeaderAll();
        }
        catch(e){
            throw new ForbiddenException();
          } 
      }*/

}
