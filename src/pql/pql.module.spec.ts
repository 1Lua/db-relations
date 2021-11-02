import { ConfigModule, ConfigService } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { TypeOrmModule } from '@nestjs/typeorm'

import { config } from 'src/config/config'
import { typeOrmConfig } from 'src/config/typeorm.config'

import { GroupEntity } from './entities/group.entity'
import { JokeEntity } from './entities/joke.entity'
import { LevelEntity } from './entities/level.entity'
import { RoleEntity } from './entities/role.entity'
import { StatusEntity } from './entities/status.entity'
import { UserInGroupEntity } from './entities/user-in-group.entity'
import { UserEntity } from './entities/user.entity'
import { PqlService } from './pql.service'

const DEFAULT_CREATE_USER_COUNT = 1
const TIMEOUT_VALUE = 60000

jest.setTimeout(TIMEOUT_VALUE)

describe('PqlService', () => {
    let service: PqlService
    let configServise: ConfigService
    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot(config),
                TypeOrmModule.forRootAsync(typeOrmConfig),
                TypeOrmModule.forFeature([
                    UserEntity,
                    StatusEntity,
                    GroupEntity,
                    RoleEntity,
                    JokeEntity,
                    UserInGroupEntity,
                    LevelEntity,
                ]),
            ],
            providers: [PqlService],
        }).compile()

        service = module.get<PqlService>(PqlService)
        configServise = module.get<ConfigService>(ConfigService)
    })

    it('Service loaded', () => {
        expect(service).toBeDefined()
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
        await service.getAllUsers()
    })
})
