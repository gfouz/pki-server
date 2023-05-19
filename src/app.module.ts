import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProvinciaModule } from './provincia/provincia.module';
import { MunicipioModule } from './municipio/municipio.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/pki'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '/public'),
    }),
    ProvinciaModule,
    MunicipioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
