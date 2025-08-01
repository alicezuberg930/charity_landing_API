import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RESPONSE_MESSAGE } from "../decorators/public.decorator";

export interface Response<T> {
    statusCode: number
    message?: string
    data: T
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
    constructor(private reflector: Reflector) { }

    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>> | Promise<Observable<Response<T>>> {
        return next.handle().pipe(map(
            data => ({
                statusCode: context.switchToHttp().getResponse().statusCode,
                message: this.reflector.get<string>(RESPONSE_MESSAGE, context.getHandler()),
                data: data
            }))
        )
    }
}