import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = 422;
    const message = String;

    response
      .status(status)
      .json({
        code: status,
        message: "Lo sentimos, ha ocurrido un error en la solicitud. Algunos de los datos proporcionados son inválidos o están en un formato incorrecto. Por favor, revisa tus datos e intenta nuevamente.",
        dataTime: new Date().toISOString(),
      });
  }
}