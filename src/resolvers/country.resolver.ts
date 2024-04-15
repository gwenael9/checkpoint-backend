import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country, InputCreate } from "../entities/country.entity";
import CountryService from "../services/country.service";

@Resolver()
export class CountryResolver {
    @Query(() => [Country])
    async country() {
        return await new CountryService().listCountry();
    }

    @Mutation(() => Country)
    async create(@Arg("infos") infos: InputCreate) {
        return await new CountryService().createCountry(infos);
    }
}