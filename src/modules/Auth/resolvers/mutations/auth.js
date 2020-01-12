import {createToken} from '../../utils/createToken';
import {UsersModel} from 'models';
import {compare} from 'bcrypt';

export const createUser = async (root, {user, password}) => {
  console.log('ddd');
  let userExist = await UsersModel.findOne({user});

  if (userExist) {
    throw new Error('El usuario ya existe');
  }

  const newUser = await new UsersModel({
    user,
    password,
  }).save();

  console.log(newUser);

  return 'Usuario creado correctamente';
};

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
