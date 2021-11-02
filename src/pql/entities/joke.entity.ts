import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { UserEntity } from './user.entity'

export const JOKE_TABLE_NAME = 'jokes'

@Entity(JOKE_TABLE_NAME)
export class JokeEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: String })
    name: string

    @Column({ type: String })
    text: string

    @Column({ type: 'float' })
    rate: number

    @Column({ type: 'int' })
    like: number

    @Column({ type: 'int' })
    viev: number

    @Column({ type: 'uuid', nullable: true })
    userId: string

    @ManyToOne(() => UserEntity, (user) => user.jokes, { onDelete: 'CASCADE' })
    user: UserEntity
}
