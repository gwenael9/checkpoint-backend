import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country, InputCreate } from "../entities/country.entity";
import CountryService from "../services/country.service";

@Resolver()
export class CountryResolver {

    // tout nos pays
    @Query(() => [Country])
    async country() {
        return await new CountryService().listCountry();
    }

    // creation d'un pays
    @Mutation(() => Country)
    async create(@Arg("infos") infos: InputCreate) {
        return await new CountryService().createCountry(infos);
    }

    // affichage d'un pays selon son code
    @Query(() => Country)
    async countryByCode(@Arg("infos") infos: string) {
        return await new CountryService().getCountryByCode(infos);
    }

    // affichage de tout les pays selon leur continent
    @Query(() => [Country]) 
    async countryByContinent(@Arg("infos") infos: string) {
        return await new CountryService().getAllCountryByContinent(infos);
    }
}