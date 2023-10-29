import { Injectable } from '@nestjs/common';
import {informationOtp} from './MscustomeOtservCpay.entity';
import { CreateInformationDto } from './dto/validation.dto';

@Injectable()
export class MscustomeOtservCpayService {
    
    getAllInformation() 
    {
        return {
            "code" : "00",
            "messages" : "Success",
            "dateTime" : new Date().toISOString(),
        }

    }
}
