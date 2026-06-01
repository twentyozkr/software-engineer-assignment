import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // 프론트엔드(apps/web)와의 통신을 위한 CORS. 필요에 맞게 조정하세요.
  app.enableCors({ origin: true, credentials: true })

  const port = process.env.PORT ?? 3000
  await app.listen(port)
  // eslint-disable-next-line no-console
  console.log(`API listening on http://localhost:${port}`)
}

bootstrap()
