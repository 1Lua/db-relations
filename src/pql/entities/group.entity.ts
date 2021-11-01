import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

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

    @OneToMany(() => UserInGroupEntity, (userInGroup) => userInGroup.group)
    userInGroup: UserInGroupEntity[]
}
