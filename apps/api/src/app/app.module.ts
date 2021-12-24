import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { APP_BUILD_PATH } from './configuration';

import { AppController } from './controller';
import { AppService } from './service';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: APP_BUILD_PATH })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
