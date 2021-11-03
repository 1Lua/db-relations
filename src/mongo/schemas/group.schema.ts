import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

import { Level } from './level.schema'
import { UserInGroup } from './user-in-group.schema'

export type GroupDocument = Group & Document

@Schema()
export class Group {
    @Prop({ type: String })
    name: string

    @Prop({ type: String })
    shortName: string

    @Prop({ type: Types.ObjectId, ref: 'Level' })
    level: Level

    @Prop({ type: [{ type: Types.ObjectId, ref: 'UserInGroup' }] })
    userInGroup: UserInGroup[]
}

export const GroupSchema = SchemaFactory.createForClass(Group)
