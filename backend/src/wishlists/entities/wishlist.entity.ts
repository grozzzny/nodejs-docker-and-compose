import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'
import { User } from '../../users/entities/user.entity'
import { Wish } from '../../wishes/entities/wish.entity'

@Entity('wishlists')
export class Wishlist {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 250 })
  name: string

  @Column({ length: 1024, nullable: true })
  description: string

  @Column()
  image: string

  @ManyToOne(() => User, (user) => user.wishlists, { onDelete: 'CASCADE' })
  owner: User

  @ManyToMany(() => Wish)
  @JoinTable()
  items: Wish[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
