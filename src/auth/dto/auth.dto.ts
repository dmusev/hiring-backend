import { ObjectType, Field } from '@nestjs/graphql';
import { User } from './user.dto';

@ObjectType()
export class Auth {
    @Field()
    accessToken: string;

    @Field(() => User)
    user: User;
}
