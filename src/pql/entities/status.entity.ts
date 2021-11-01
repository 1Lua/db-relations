import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'

import { UserEntity } from './user.entity'

export const STATUS_TABLE_NAME = 'status'

@Entity(STATUS_TABLE_NAME)
export class StatusEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: String })
    name: string

    @OneToOne(() => UserEntity, (user) => user.status)
    @JoinColumn()
    user: UserEntity
}
