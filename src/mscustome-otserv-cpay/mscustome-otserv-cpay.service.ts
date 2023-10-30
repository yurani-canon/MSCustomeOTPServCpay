import { Injectable } from '@nestjs/common';
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

    
        headersObj = {
        "x-cp-channel": "string",
        "x-cp-appname": "string",
        "x-cp-versionapp": "string",
        "x-cp-versioncode": "string",
        "x-cp-uuid": "string",
        "x-cp-devicemodel": "string",
        "x-cp-brand": "string",
        "x-cp-platform": "string",
        "x-cp-platformversion": "string",
        "x-cp-bundleid": "string",
        "x-cp-carrier": "string",
        "x_id_access_token": "string",
        "x_cp_access_token": "string",
    }

     validationHeader = ['x-cp-channel', 'x-cp-appname','x-cp-versionapp', 'x-cp-versioncode', 'x-cp-uuid', 'x-cp-devicemodel', 'x-cp-brand', 'x-cp-platform', 'x-cp-platformversion', 'x-cp-bundleid', 'x-cp-carrier', 'x_id_access_token', 'x_cp_access_token']
    
    getHeaderAll() 
    {
        this.validationHeader.forEach(element => {
            if(this.headersObj[element] !== null || ' ')
            {
                return {
                    "code": "401",
                    "message": "Acceso no autorizado. Por favor, asegúrese de pr oporcionar credenciales válidas para acceder a esta API.",
                    "dateTime": 1697044555
                }
            }
        }
    )};
}
