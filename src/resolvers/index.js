import AuthMutations from 'modules/Auth/resolvers/mutations';
import providersQueries from './providers/queries'
import providerQueries from './provider/queries'

export const resolvers = {
  Query: {
    ...providersQueries,
    ...providerQueries,
  },
  Mutation: {
    ...AuthMutations,
  },
};
