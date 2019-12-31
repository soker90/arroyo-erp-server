import {createToken} from '../../utils/createToken';
import {AuthModel} from 'models';
import {compare} from 'bcrypt';

export const auth = async (_, {user, password}) => {
  const username = await AuthModel.findOne({user});

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
