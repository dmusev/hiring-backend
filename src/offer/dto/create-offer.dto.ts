import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateOfferDto {
    @Field()
    title: string;

    @Field(type => Float, { nullable: true })
    salary?: number;

    @Field()
    status: string;

    @Field()
    candidateId: string;
}