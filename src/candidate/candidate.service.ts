import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from './candidate.entity';
import { CreateCandidateDto } from './dto/create-candidate.dto';

@Injectable()
export class CandidateService {
    constructor(
        @InjectRepository(Candidate)
        private candidateRepository: Repository<Candidate>,
    ) { }

    findAll(): Promise<Candidate[]> {
        return this.candidateRepository.find({ relations: ["offers"] });
    }

    findOne(id: any): Promise<Candidate> {
        return this.candidateRepository.findOne({
            where: { id },
            relations: ["offers"]
        });
    }

    async create(candidateData: CreateCandidateDto): Promise<Candidate> {
        const candidate = this.candidateRepository.create(candidateData);
        await this.candidateRepository.save(candidate);
        return candidate;
    }
}
