import { buildSchema } from "type-graphql";
import { CountryResolver } from "../resolvers/country.resolver";

export default buildSchema({
    resolvers: [CountryResolver],
    validate: false,
})