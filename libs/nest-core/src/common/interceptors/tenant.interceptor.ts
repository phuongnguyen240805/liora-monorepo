import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Request } from 'express'
import { Observable } from 'rxjs'

export interface JwtUserPayload {
  organization?: string
  org?: string
  [key: string]: any
}

export interface TenantRequest extends Request {
  user?: JwtUserPayload
  organization?: string
}

@Injectable()
export class TenantInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<TenantRequest>()

    const organization = request.user?.organization || request.user?.org

    if (organization) {
      request.organization = organization
    }

    return next.handle()
  }
}
