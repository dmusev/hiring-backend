import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Offer } from '../offer/offer.entity';

@ObjectType()
@Entity()
export class Candidate {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    email: string;

    @Field(() => [Offer])
    @OneToMany(() => Offer, offer => offer.candidate)
    offers: Offer[];
}
