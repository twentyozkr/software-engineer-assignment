import { Controller, Get } from '@nestjs/common'

/**
 * 헬스 체크용 기본 컨트롤러. 스타터가 정상 부팅하는지 확인용입니다.
 * 본격적인 도메인 컨트롤러는 각 모듈에 작성하세요.
 */
@Controller()
export class AppController {
  @Get('health')
  health() {
    return { status: 'ok' }
  }
}
