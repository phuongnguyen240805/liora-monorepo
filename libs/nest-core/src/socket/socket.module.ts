import { forwardRef, Module, Provider } from '@nestjs/common'

import { AuthModule } from '@liora/nest-core/auth/auth.module'
import { SystemModule } from '@liora/nest-core/system/system.module'

import { AdminEventsGateway } from './events/admin.gateway'
import { WebEventsGateway } from './events/web.gateway'

const providers: Provider[] = [AdminEventsGateway, WebEventsGateway]

@Module({
  imports: [forwardRef(() => SystemModule), AuthModule],
  providers,
  exports: [...providers],
})
export class SocketModule {}
