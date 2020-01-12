import AuthMutations from 'modules/Auth/resolvers/mutations';
import {UsersModel} from '../models';

export const resolvers = {
  Query: {
    // No se usa getUser, ni sirve
    getUser: (_) => {
      return UsersModel.findOne({user: 'dd'});
    },
  },
  Mutation: {
    ...AuthMutations,
  },
};
