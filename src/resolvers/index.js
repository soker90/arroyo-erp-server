import AuthMutations from 'modules/Auth/resolvers/mutations';
import providersQueries from './providers/queries'

export const resolvers = {
  Query: {
    ...providersQueries,
  },
  Mutation: {
    ...AuthMutations,
  },
};
