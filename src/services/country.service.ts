import { GraphQLError } from 'graphql';
import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import { Country, InputCreate } from "../entities/country.entity";

export default class CountryService {
    db: Repository<Country>;
    constructor() {
        this.db = datasource.getRepository(Country);
    }

    async listCountry() {
        return this.db.find();
    }

    async createCountry({ code, name, emoji, continent }: InputCreate) {
        const newCountry = this.db.create({ code, name, emoji, continent });
        return await this.db.save(newCountry);
    }

    async getCountryByCode(code: string) {
        const country = await this.db.findOneBy({ code });
        if (!country) throw new GraphQLError("Aucun pays ne correspond.");
        return country;
    }

    async getAllCountryByContinent(continent: string) {
        return await this.db.find({ where: { continent }});
    }
}