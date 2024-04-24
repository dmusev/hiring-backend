import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateOfferInput {
    @Field()
    candidateId: string;

    @Field(type => Float, { nullable: true })  // Make salary optional
    salary?: number;

    @Field()
    status: string;

    @Field()
    title: string;
}
