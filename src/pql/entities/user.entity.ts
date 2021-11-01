import {
    Column,
    Entity,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'

import { JokeEntity } from './joke.entity'
import { RoleEntity } from './role.entity'
import { StatusEntity } from './status.entity'
import { UserInGroupEntity } from './user-in-group.entity'

export const USER_TABLE_NAME = 'users'

@Entity(USER_TABLE_NAME)
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: String })
    name: string

    @Column({ type: String })
    surname: string

    @Column({ type: String })
    login: string

    @Column({ type: String })
    password: string

    @Column({ type: 'bigint', default: Date.now() })
    createdAt: number

    @Column({ type: 'bigint', nullable: true })
    deletedAt: number | undefined

    @OneToOne(() => StatusEntity, (status) => status.user)
    status: StatusEntity

    @OneToOne(() => RoleEntity, (role) => role.user)
    role: RoleEntity

    @OneToMany(() => JokeEntity, (joke) => joke.user)
    jokes: JokeEntity[]

    @OneToMany(() => UserInGroupEntity, (userInGroup) => userInGroup.user)
    userInGroup: UserInGroupEntity[]
}
