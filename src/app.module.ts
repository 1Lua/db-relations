import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { config } from './config/config'
import { typeOrmConfig } from './config/typeorm.config'
import { PqlModule } from './pql/pql.module'

@Module({
    imports: [
        ConfigModule.forRoot(config),
        TypeOrmModule.forRootAsync(typeOrmConfig),
        PqlModule,
    ],
})
export class AppModule {}
