import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { GroupEntity } from './group.entity'
import { UserEntity } from './user.entity'

export const USER_IN_GROUP_TABLE_NAME = 'user_in_group'

@Entity(USER_IN_GROUP_TABLE_NAME)
export class UserInGroupEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: String })
    createdAt: Date

    @Column({ type: String, nullable: true })
    deletedAt: Date

    @Column({ type: 'uuid' })
    userId: string

    @ManyToOne(() => UserEntity, (user) => user.userInGroup, {
        onDelete: 'CASCADE',
    })
    user: UserEntity

    @Column({ type: 'uuid' })
    groupId: string

    @ManyToOne(() => GroupEntity, (group) => group.userInGroup, {
        onDelete: 'CASCADE',
    })
    group: GroupEntity
}
