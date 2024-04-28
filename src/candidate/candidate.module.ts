// src/candidate/candidate.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateService } from './candidate.service';
import { CandidateResolver } from './candidate.resolver';
import { Candidate } from './candidate.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Candidate])],
    providers: [CandidateService, CandidateResolver],
    exports: [CandidateService, TypeOrmModule.forFeature([Candidate])]
})
export class CandidateModule { }
