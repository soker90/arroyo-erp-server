import providersQueries from './providers/queries'
import productsQueries from './products/queries';
import AuthMutations from 'modules/Auth/resolvers/mutations';
import deliveryOrderQueries from './deliveryorder/queries';
import providersMutations from './providers/mutations';
import productsMutations from './products/mutations';
import deliveryOrderMutations from './deliveryorder/mutations';

export const resolvers = {
  Query: {
    ...providersQueries,
    ...productsQueries,
    ...deliveryOrderQueries,
  },
  Mutation: {
    ...AuthMutations,
    ...providersMutations,
    ...productsMutations,
    ...deliveryOrderMutations,
  },
};
