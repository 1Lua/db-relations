import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'

import { UserEntity } from './user.entity'

export const ROLE_TABLE_NAME = 'roles'

@Entity(ROLE_TABLE_NAME)
export class RoleEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: String })
    name: string

    @Column({ type: 'uuid' })
    userId: string

    @OneToOne(() => UserEntity, (user) => user.role, { onDelete: 'CASCADE' })
    @JoinColumn()
    user: UserEntity
}
