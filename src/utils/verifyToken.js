import {verify} from 'jsonwebtoken';
import {AuthenticationError} from 'apollo-server-errors';

export const verifyToken = async ({req}) => {
  const token = req.headers['authorization'];
  console.log('TOKEN', token);

  if (token) {
    try {
      const currentUser = await verify(token, process.env.SECRECT);
      req.currentUser = currentUser;
      console.log('currentUser', currentUser.user);

      return {
        currentUser,
      }
    } catch (error) {
      console.error('Error al verificar el token', error);
      throw new AuthenticationError('Acceso denegado');
    }
  } else {
    // throw new AuthenticationError('Acceso denegado');
  }
};
