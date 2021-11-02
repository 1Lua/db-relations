import {
    Column,
    Entity,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'

import { LevelEntity } from './level.entity'
import { UserInGroupEntity } from './user-in-group.entity'

export const GROUP_TABLE_NAME = 'groups'

@Entity(GROUP_TABLE_NAME)
export class GroupEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: String })
    name: string

    @Column({ type: String })
    shortname: string

    @OneToOne(() => LevelEntity, (level) => level.group)
    level: LevelEntity

    @OneToMany(() => UserInGroupEntity, (userInGroup) => userInGroup.group)
    userInGroup: UserInGroupEntity[]
}
