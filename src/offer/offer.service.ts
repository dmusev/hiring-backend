import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from './offer.entity';
import { Candidate } from '../candidate/candidate.entity';
import { CreateOfferInput } from './dto/create-offer.input';
import { CandidateService } from '../candidate/candidate.service';
@Injectable()
export class OfferService {
    constructor(
        @InjectRepository(Offer)
        private offerRepository: Repository<Offer>,
        private candidateService: CandidateService

    ) { }

    findAll(): Promise<Offer[]> {
        return this.offerRepository.find();
    }

    findOne(id: any): Promise<Offer> {
        return this.offerRepository.findOne({
            where: { id },
            relations: ["candidate"]
        });
    }

    async create(createOfferInput: CreateOfferInput): Promise<Offer> {
        const offer = this.offerRepository.create(createOfferInput);
        await this.offerRepository.save(offer);
        return this.findOne(offer.id);
    }

    async update(id: any, status: string): Promise<Offer> {
        const offer = await this.offerRepository.findOne({ where: { id } });
        offer.status = status;
        await this.offerRepository.save(offer);
        return offer;
    }

    async getCandidate(candidateId: string): Promise<Candidate> {
        return this.candidateService.findOne(candidateId);
    }
}