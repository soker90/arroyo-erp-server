import {UsersModel} from 'models';

/**
 * Crea un usuario
 * @param _ - No se usa
 * @param {String} user
 * @param {String} password
 * @returns {String}
 */
export const createUser = async (_, {user, password}) => {
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
