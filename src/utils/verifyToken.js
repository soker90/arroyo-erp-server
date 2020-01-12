import {verify} from 'jsonwebtoken';

export const verifyToken = async ({req}) => {
  const token = req.headers['authorization'];
  console.log('TOKEN', token);

  if (token) {
    try {
      const currentUser = await verify(token, process.env.SECRECT);
      req.currentUser = currentUser;
      console.log('currentUser', currentUser);

      return {
        currentUser,
      }
    } catch (error) {
      console.error('Error al verificar el token', error);
    }
  }
}
