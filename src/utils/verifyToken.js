import {verify} from 'jsonwebtoken';
import {AuthenticationError} from 'apollo-server-errors';
import {createToken} from 'modules/Auth/utils/createToken';

export const verifyToken = async ({req, res}) => {
  const token = req.headers['authorization'];
  console.log('TOKEN', token);

  if (token) {
    try {
      const currentUser = await verify(token, process.env.SECRECT);
      req.currentUser = currentUser;

      res.set({
        'Authorization': createToken(req.currentUser.user, process.env.SECRECT, '2h'),
      })

      return {
        currentUser,
      }
    } catch (error) {
      console.error('Error al verificar el token', error);
      throw new AuthenticationError('Acceso denegado');
    }
  } else {
    if (!/login/.test(req.headers.referer))
      throw new AuthenticationError('Acceso denegado');
  }
};
