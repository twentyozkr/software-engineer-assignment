import { Module } from '@nestjs/common'
import { AppController } from './app.controller'

/**
 * 루트 모듈.
 *
 * 여기에 auth / user / role / menu 모듈을 추가해 나가세요.
 * 예) imports: [AuthModule, UserModule, RoleModule, MenuModule]
 */
@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
