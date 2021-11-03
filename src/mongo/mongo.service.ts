import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Group, GroupDocument } from './schemas/group.schema'
import { Joke, JokeDocument } from './schemas/joke.schema'
import { Level, LevelDocument } from './schemas/level.schema'
import { Role, RoleDocument } from './schemas/role.schema'
import { Status, StatusDocument } from './schemas/status.schema'
import {
    UserInGroup,
    UserInGroupDocument,
} from './schemas/user-in-group.schema'
import { User, UserDocument, UserRelations } from './schemas/user.schema'

@Injectable()
export class MongoService {
    constructor(
        @InjectModel(User.name)
        private readonly _userModel: Model<UserDocument>,
        @InjectModel(Status.name)
        private readonly _statusModel: Model<StatusDocument>,
        @InjectModel(Role.name)
        private readonly _roleModel: Model<RoleDocument>,
        @InjectModel(Joke.name)
        private readonly _jokeModel: Model<JokeDocument>,
        @InjectModel(Group.name)
        private readonly _groupModel: Model<GroupDocument>,
        @InjectModel(Level.name)
        private readonly _levelModel: Model<LevelDocument>,
        @InjectModel(UserInGroup.name)
        private readonly _userInGroupModel: Model<UserInGroupDocument>,
    ) {}

    async createManyUsers(count: number): Promise<void> {
        const proms: Promise<void>[] = []

        for (let i = 0; i < count; i += 1) {
            proms.push(this.createUser())
        }

        await Promise.all(proms)
    }

    async createUser(): Promise<void> {
        const user = new this._userModel({
            name: 'Matvey',
            surname: 'Sokolanov',
            login: 'kidnapper',
            password: '12345',
        })
        await user.save()

        const status = new this._statusModel({
            name: 'active',
            user,
        })
        await status.save()

        const role = new this._roleModel({
            name: 'user',
            user,
        })
        await role.save()

        const joke1 = new this._jokeModel({
            name: 'joke1',
            text: 'Random text',
            rate: 4.7,
            like: 30,
            viev: 107,
            user,
        })
        await joke1.save()

        const joke2 = new this._jokeModel({
            name: 'joke2',
            text: 'Random text',
            rate: 4.1,
            like: 15,
            viev: 127,
            user,
        })
        await joke2.save()

        const group = new this._groupModel({
            name: 'Gold Memes',
            shortName: 'memes',
        })
        await group.save()

        const level = new this._levelModel({
            name: 'high',
            group,
        })
        await level.save()

        const userInGroup = new this._userInGroupModel({
            createdAt: Date.now(),
            user,
            group,
        })
        await userInGroup.save()

        user.status = status
        user.role = role
        user.jokes = [joke1, joke2]
        user.userInGroup = [userInGroup]
        await user.save()

        group.userInGroup = [userInGroup]
        await group.save()
    }

    async getAllUser(): Promise<void> {
        await this._userModel
            .find({})
            .populate(UserRelations.status)
            .populate(UserRelations.role)
            .populate(UserRelations.jokes)
            .populate(UserRelations.userInGroup)
    }

    /*
    async getUser(): Promise<UserDocument | null> {
        const user = await this._userModel.findOne({})
        .populate(UserRelations.status)
        .populate(UserRelations.role)
        .populate(UserRelations.jokes)
        .populate(UserRelations.userInGroup)
        return user
    }
    */
}
