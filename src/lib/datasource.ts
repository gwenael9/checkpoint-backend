import { DataSource } from "typeorm";
import { Country } from "../entities/country.entity";

export default new DataSource({
  type: "sqlite",
  database: "checkpoint-backend.sqlite",
  entities: [Country],
  synchronize: true,
});