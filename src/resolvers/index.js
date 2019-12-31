import AuthMutations from 'modules/Auth/resolvers/mutations';
import {AuthModel} from '../models';

export const resolvers = {
  Query: {
    getUser: (_) => {
      return AuthModel.findOne({user: 'dd'});
    },
  },
  Mutation: {
    ...AuthMutations,
  },
};
