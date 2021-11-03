import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

import { User } from './user.schema'

export type StatusDocument = Status & Document

@Schema()
export class Status {
    @Prop({ type: String })
    name: string

    @Prop({ type: Types.ObjectId, ref: 'User' }) // one to one
    user: User
}

export const StatusSchema = SchemaFactory.createForClass(Status)
