import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { GroupEntity } from './entities/group.entity'
import { JokeEntity } from './entities/joke.entity'
import { RoleEntity } from './entities/role.entity'
import { StatusEntity } from './entities/status.entity'
import { UserInGroupEntity } from './entities/user-in-group.entity'
import { UserEntity } from './entities/user.entity'
import { PqlService } from './pql.service'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity,
            StatusEntity,
            GroupEntity,
            RoleEntity,
            JokeEntity,
            UserInGroupEntity,
        ]),
    ],
    providers: [PqlService],
    exports: [PqlService],
})
export class PqlModule {}
