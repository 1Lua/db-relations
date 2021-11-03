import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

import { Group } from './group.schema'

export type LevelDocument = Level & Document

@Schema()
export class Level {
    @Prop({ type: String })
    name: string

    @Prop({ type: Types.ObjectId, ref: 'Group' })
    group: Group
}

export const LevelSchema = SchemaFactory.createForClass(Level)
