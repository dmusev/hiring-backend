import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CandidateService } from '../candidate/candidate.service';

@Injectable()
export class AuthService {
    constructor(
        private candidateService: CandidateService,
        private jwtService: JwtService
    ) { }

    async validateLogin(id: any, email: string): Promise<any> {
        const candidate = await this.candidateService.findByEmail(id, email);
        if (candidate) {
            return candidate;
        }
        return null;
    }

    async login(user: any) {
        const payload = { id: user.id, email: user.email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
