import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserEntity } from "./entity/user.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "lighthouse",
  synchronize: true,
  logging: false,
  entities: [UserEntity],
  migrations: ['./migration/*.ts'],
  subscribers: [],
});
