import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

import { User } from './user.schema'

export type RoleDocument = Role & Document

@Schema()
export class Role {
    @Prop({ type: String })
    name: string

    @Prop({ type: Types.ObjectId, ref: 'User' })
    user: User
}

export const RoleSchema = SchemaFactory.createForClass(Role)
