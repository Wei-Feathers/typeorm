import "reflect-metadata"
import { DataSource } from "typeorm"
import { Music } from "./entity/User"

export const AppDataSource = new DataSource({
    name: "default",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "myuser",
    password: "mypassword",
    database: "mydatabase",
    synchronize: true,
    logging: false,
    entities: [Music],
    migrations: [],
    subscribers: [],
})
