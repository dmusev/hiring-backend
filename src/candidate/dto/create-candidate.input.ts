import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCandidateInput {
    @Field()
    name: string;

    @Field()
    email: string;
}
