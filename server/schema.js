import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import schema from './schema.graphql';

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolvers,
});

//console.log(schema)
//console.log(resolvers)
export default executableSchema;