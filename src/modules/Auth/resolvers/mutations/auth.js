import {createToken} from 'modules/Auth/utils/createToken';
import {UsersModel} from 'models';
import {compare} from 'bcrypt';

/**
 * Acutenticación de usuarios
 * Si es correcta la combinacion de usuario y contraseña
 * devuelve un token
 * @param _
 * @param {String} user
 * @param {String} password
 * @returns {Promise<{token: (undefined|*)}>}
 */
export const auth = async (_, {user, password}) => {
  const username = await UsersModel.findOne({user});

  if (!username) {
    throw new Error('El usuario no fue encontrado.')
  }

  const isCorrect = await compare(password, username.password);

  // Si password es incorrecto
  if (!isCorrect) {
    throw new Error('Contraseña incorrecta')
  }

  return {
    token: createToken(username, process.env.SECRECT, '1hr'),
  }
};
