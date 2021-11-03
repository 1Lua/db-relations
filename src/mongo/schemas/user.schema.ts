import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

import { Joke } from './joke.schema'
import { Role } from './role.schema'
import { Status } from './status.schema'
import { UserInGroup } from './user-in-group.schema'

export type UserDocument = User & Document

@Schema()
export class User {
    @Prop({ type: String })
    name: string

    @Prop({ type: String })
    surname: string

    @Prop({ type: String })
    login: string

    @Prop({ type: String })
    password: string

    @Prop({ type: Number })
    createdAt: number

    @Prop({ type: Number })
    deletedAt: number | undefined

    @Prop({ type: Types.ObjectId, ref: 'Status' }) // one to one
    status: Status

    @Prop({ type: Types.ObjectId, ref: 'Role' }) // one to one
    role: Role

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Joke' }] }) // one to many
    jokes: Joke[]

    @Prop({ type: [{ type: Types.ObjectId, ref: 'UserInGroup' }] }) // many to many across 'user_in_group' table
    userInGroup: UserInGroup[]
}

export enum UserRelations {
    status = 'status',
    role = 'role',
    jokes = 'jokes',
    userInGroup = 'userInGroup',
}

export const UserSchema = SchemaFactory.createForClass(User)
