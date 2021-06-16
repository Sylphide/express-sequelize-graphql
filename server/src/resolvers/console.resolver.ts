import { Console } from '../models/console.model';
import { Query, Resolver } from 'type-graphql';

@Resolver()
export class ConsoleResolver {
  @Query(() => [Console])
  consoles() {
    return Console.findAll();
  }
}
