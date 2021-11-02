import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'

import { GroupEntity } from './group.entity'

export const LEVEL_TABLE_NAME = 'levels'

@Entity(LEVEL_TABLE_NAME)
export class LevelEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: String })
    name: string

    @Column({ type: 'uuid' })
    groupId: string

    @OneToOne(() => GroupEntity, (group) => group.level)
    @JoinColumn()
    group: GroupEntity
}
