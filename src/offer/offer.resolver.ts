import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { OfferService } from './offer.service';
import { Offer } from './offer.entity';
import { CreateOfferInput } from './dto/create-offer.input';
import { Candidate } from '../candidate/candidate.entity';

@Resolver(of => Offer)
export class OfferResolver {
    constructor(private readonly offerService: OfferService) { }

    @Query(() => [Offer], { name: 'offers' })
    async getAllOffers(): Promise<Offer[]> {
        return this.offerService.findAll();
    }

    @Query(() => Offer, { name: 'offer' })
    async getOffer(@Args('id', { type: () => String }) id: string): Promise<Offer> {
        return this.offerService.findOne(id);
    }

    @Mutation(() => Offer)
    async createOffer(@Args('input') createOfferInput: CreateOfferInput): Promise<Offer> {
        return this.offerService.create(createOfferInput);
    }

    @ResolveField(() => Candidate)
    async candidate(@Parent() offer: Offer): Promise<Candidate> {
        return this.offerService.getCandidate(offer.candidateId);
    }
}
