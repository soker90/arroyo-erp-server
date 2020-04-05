import providersQueries from './providers/queries'
import productsQueries from './products/queries';
import AuthMutations from 'modules/Auth/resolvers/mutations';
import providersMutations from './providers/mutations';
import productsMutations from './products/mutations';
import deliveryOrderMutations from './deliveryorder/mutations';

export const resolvers = {
  Query: {
    ...providersQueries,
    ...productsQueries,
  },
  Mutation: {
    ...AuthMutations,
    ...providersMutations,
    ...productsMutations,
    ...deliveryOrderMutations,
  },
};
