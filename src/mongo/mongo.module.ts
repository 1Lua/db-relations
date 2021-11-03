import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { MongoService } from './mongo.service'
import { Group, GroupSchema } from './schemas/group.schema'
import { Joke, JokeSchema } from './schemas/joke.schema'
import { Level, LevelSchema } from './schemas/level.schema'
import { Role, RoleSchema } from './schemas/role.schema'
import { Status, StatusSchema } from './schemas/status.schema'
import { UserInGroup, UserInGroupSchema } from './schemas/user-in-group.schema'
import { User, UserSchema } from './schemas/user.schema'

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
            { name: Status.name, schema: StatusSchema },
            { name: Role.name, schema: RoleSchema },
            { name: Joke.name, schema: JokeSchema },
            { name: Group.name, schema: GroupSchema },
            { name: Level.name, schema: LevelSchema },
            { name: UserInGroup.name, schema: UserInGroupSchema },
        ]),
    ],
    providers: [MongoService],
})
export class MongoModule {}
