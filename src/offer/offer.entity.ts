import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Candidate } from '../candidate/candidate.entity';

@ObjectType()
@Entity()
export class Offer {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    title: string;

    @Field(() => Float, { nullable: true })
    @Column({ type: 'float', nullable: true })
    salary: number;

    @Field()
    @Column()
    status: string;

    @Field(() => Candidate)
    @ManyToOne(() => Candidate, candidate => candidate.offers)
    @JoinColumn({ name: "candidate_id" })
    candidate: Candidate;

    @Field(() => Float, { nullable: true })
    @Column({ nullable: true })
    candidateId: string;
}