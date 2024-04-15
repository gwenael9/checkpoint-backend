import http from "http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import datasource from "./lib/datasource";
import "reflect-metadata";
import schemaPromise from "./lib/schema"; 

const port = 4001;
const app = express();
const httpServer = http.createServer(app);

async function main() {
  const schema = await schemaPromise;

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  app.use(
    "/",
    express.json(),
    expressMiddleware(server)
  );
  await datasource.initialize();
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: port }, resolve)
  );
  console.info(`🚀 Server lancé sur http://localhost:${port}/`);
}

main();