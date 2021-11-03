import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

import { config } from 'src/config/config'
import { mongooseConfig } from 'src/config/mongoose.config'

import { MongoService } from './mongo.service'
import { Group, GroupSchema } from './schemas/group.schema'
import { Joke, JokeSchema } from './schemas/joke.schema'
import { Level, LevelSchema } from './schemas/level.schema'
import { Role, RoleSchema } from './schemas/role.schema'
import { Status, StatusSchema } from './schemas/status.schema'
import { UserInGroup, UserInGroupSchema } from './schemas/user-in-group.schema'
import { User, UserSchema } from './schemas/user.schema'

const DEFAULT_CREATE_USER_COUNT = 1
const TIMEOUT_VALUE = 60000

jest.setTimeout(TIMEOUT_VALUE)

describe('MongoService', () => {
    let service: MongoService
    let configServise: ConfigService
    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot(config),
                MongooseModule.forRootAsync(mongooseConfig),
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
        }).compile()

        service = module.get<MongoService>(MongoService)
        configServise = module.get<ConfigService>(ConfigService)
    })

    it('Services loaded', () => {
        expect(service).toBeDefined()
        expect(configServise).toBeDefined()
    })

    it('Create users', async () => {
        // test creating user
        const count =
            configServise.get<number>('CREATE_USER_COUNT') ||
            DEFAULT_CREATE_USER_COUNT
        await service.createManyUsers(count)
    })

    it('Getting all users', async () => {
        // test getting all users
        await service.getAllUser()
    })
})
