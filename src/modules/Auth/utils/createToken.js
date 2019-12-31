import {sign} from 'jsonwebtoken'

export const createToken = (user, secret, expiresIn) =>
  sign({user}, secret, {expiresIn});
