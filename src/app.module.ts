import { Module } from '@nestjs/common';
import { MscustomeOtservCpayController } from './mscustome-otserv-cpay/mscustome-otserv-cpay.controller';
import { MscustomeOtservCpayService } from './mscustome-otserv-cpay/mscustome-otserv-cpay.service';

@Module({
  imports: [],
  controllers: [MscustomeOtservCpayController],
  providers: [MscustomeOtservCpayService],
})
export class AppModule {}
