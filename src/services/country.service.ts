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

    async createCountry({ code, name, emoji }: InputCreate) {
        const newCountry = this.db.create({ code, name, emoji });
        return await this.db.save(newCountry);
    }
}