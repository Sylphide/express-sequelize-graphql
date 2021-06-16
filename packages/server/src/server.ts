import { Console } from './models/console.model';
import 'reflect-metadata';
import { sequelize } from './database';
import { ConsoleResolver } from './resolvers/console.resolver';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

export async function server() {
  await sequelize.authenticate();
  await sequelize.sync();
  const test = Console.build({ name: 'test' });
  await test.save();
  const schema = await buildSchema({
    resolvers: [ConsoleResolver],
  });
  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.listen();
  console.log('Server is running on localhost:4000');
}
