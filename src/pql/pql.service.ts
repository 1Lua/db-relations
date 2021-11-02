import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { GroupEntity } from './entities/group.entity'
import { JokeEntity } from './entities/joke.entity'
import { LevelEntity } from './entities/level.entity'
import { RoleEntity } from './entities/role.entity'
import { StatusEntity } from './entities/status.entity'
import { UserInGroupEntity } from './entities/user-in-group.entity'
import { UserEntity } from './entities/user.entity'

@Injectable()
export class PqlService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly _usersRepository: Repository<UserEntity>,
        @InjectRepository(StatusEntity)
        private readonly _statusRepository: Repository<StatusEntity>,
        @InjectRepository(RoleEntity)
        private readonly _rolesRepository: Repository<RoleEntity>,
        @InjectRepository(GroupEntity)
        private readonly _groupsRepository: Repository<GroupEntity>,
        @InjectRepository(JokeEntity)
        private readonly _jokesRepository: Repository<JokeEntity>,
        @InjectRepository(UserInGroupEntity)
        private readonly _userInGroupRepository: Repository<UserInGroupEntity>,
        @InjectRepository(LevelEntity)
        private readonly _levelRepository: Repository<LevelEntity>,
    ) {}

    async createManyUsers(count: number): Promise<void> {
        const proms: Promise<void>[] = []
        for (let i = 0; i < count; i += 1) {
            proms.push(this.createUser())
        }
        await Promise.all(proms)
    }

    async createUser(): Promise<void> {
        const user = this._usersRepository.create({
            name: 'Matvey',
            surname: 'Sokolanov',
            login: 'kidnapper',
            password: '12345',
        })
        await this._usersRepository.save(user)

        const status = this._statusRepository.create({
            name: 'Active',
            user,
        })
        await this._statusRepository.save(status)

        const role = this._rolesRepository.create({
            name: 'user',
            user,
        })
        await this._rolesRepository.save(role)

        const joke1 = this._jokesRepository.create({
            name: 'joke1',
            text: 'Random text',
            rate: 4.7,
            like: 10,
            viev: 107,
            user,
        })
        await this._jokesRepository.save(joke1)

        const joke2 = this._jokesRepository.create({
            name: 'joke2',
            text: 'Random text',
            rate: 3.1,
            like: 5,
            viev: 238,
            user,
        })
        await this._jokesRepository.save(joke2)

        const group = this._groupsRepository.create({
            name: 'Gold Memes',
            shortname: 'memes',
        })
        await this._groupsRepository.save(group)

        const level = this._levelRepository.create({
            name: 'high',
            group,
        })
        await this._levelRepository.save(level)

        const userInGroup = this._userInGroupRepository.create({
            createdAt: Date.now(),
            user,
            group,
        })

        await this._userInGroupRepository.save(userInGroup)
    }

    /*
    async getUser(): Promise<any> {
        return await this._usersRepository.findOne({}, {
            relations: ['jokes', 'role', 'status', 'userInGroup']
        })
    }

    async getJoke(): Promise<any> {
        return await this._jokesRepository.findOne({}, {
            relations: ['user']
        })
    }
    */
}
