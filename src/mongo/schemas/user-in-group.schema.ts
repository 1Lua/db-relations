import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

import { Group } from './group.schema'
import { User } from './user.schema'

export type UserInGroupDocument = UserInGroup & Document

@Schema()
export class UserInGroup {
    @Prop({ type: Number })
    createdAt: number

    @Prop({ type: Number })
    deletedAt: number | undefined

    @Prop({ type: Types.ObjectId, ref: 'User' })
    user: User

    @Prop({ type: Types.ObjectId, ref: 'Group' })
    group: Group
}

export const UserInGroupSchema = SchemaFactory.createForClass(UserInGroup)
