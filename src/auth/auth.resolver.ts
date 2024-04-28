// src/auth/auth.resolver.ts

import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './dto/auth.dto';
import { LoginInput } from './dto/login.input';  // Assuming you have this DTO defined

@Resolver(auth => Auth)
export class AuthResolver {
    constructor(private authService: AuthService) { }

    @Mutation(returns => Auth)
    async login(@Args('input') input: LoginInput) {
        const user = await this.authService.validateLogin(input.id, input.email);
        if (!user) throw new Error('Invalid credentials');
        const res = await this.authService.login(user);
        return {
            user,
            accessToken: res.access_token,
        }
    }
}
