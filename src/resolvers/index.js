import AuthMutations from 'modules/Auth/resolvers/mutations';
import providersQueries from './providers/queries'
import providersMutations from './providers/mutations';
import productsQueries from './products/queries';

export const resolvers = {
  Query: {
    ...providersQueries,
    ...productsQueries,
  },
  Mutation: {
    ...AuthMutations,
    ...providersMutations,
  },
};
