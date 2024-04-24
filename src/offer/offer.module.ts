import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferService } from './offer.service';
import { OfferResolver } from './offer.resolver';
import { Offer } from './offer.entity';
import { CandidateModule } from 'src/candidate/candidate.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Offer]),
        CandidateModule
    ],
    providers: [OfferService, OfferResolver],
})
export class OfferModule { }
