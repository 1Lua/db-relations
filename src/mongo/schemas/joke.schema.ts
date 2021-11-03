import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

import { User } from './user.schema'

export type JokeDocument = Joke & Document

@Schema()
export class Joke {
    @Prop({ type: String })
    name: string

    @Prop({ type: String })
    text: string

    @Prop({ type: Number })
    rate: number

    @Prop({ type: Number })
    like: number

    @Prop({ type: Number })
    viev: number

    @Prop({ type: Types.ObjectId, ref: 'User' })
    user: User
}

export const JokeSchema = SchemaFactory.createForClass(Joke)
