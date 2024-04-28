// seed.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from './../candidate/candidate.entity'; // Adjust import paths as needed
import { candidateSeed } from './candidate-seed';

@Injectable()
export class SeedService {
    constructor(
        @InjectRepository(Candidate)
        private readonly candidateRepository: Repository<Candidate>,
    ) { }

    async seedCandidates() {
        // Check if there are any candidates in the database
        const candidatesCount = await this.candidateRepository.count();

        if (candidatesCount === 0) {
            // Seed if no candidates found
            await this.candidateRepository.save([
                ...candidateSeed,
            ]);
        }
    }
}
