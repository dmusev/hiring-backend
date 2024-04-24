import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCandidateDto {
    @Field()
    name: string;

    @Field()
    email: string;
}