import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CandidateService } from './candidate.service';
import { Candidate } from './candidate.entity';
import { CreateCandidateInput } from './dto/create-candidate.input';  // Assuming you have this DTO defined

@Resolver(of => Candidate)
export class CandidateResolver {
    constructor(private candidateService: CandidateService) { }

    @Query(returns => [Candidate])
    candidates() {
        return this.candidateService.findAll();
    }

    @Query(returns => Candidate)
    candidate(@Args('id') id: string) {
        return this.candidateService.findOne(id);
    }

    @Mutation(returns => Candidate)
    createCandidate(@Args('input') createCandidateInput: CreateCandidateInput) {
        return this.candidateService.create(createCandidateInput);
    }
}
