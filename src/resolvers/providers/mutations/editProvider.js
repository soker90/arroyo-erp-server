import {ProvidersModel} from 'models';

/**
 * Edita un proveedor
 * @param _ - No se usa
 * @param {Object} input
 * @returns {String}
 */
export const editProvider = async (_, {input}) => {
  const data = {
    name: input.name,
    address: input.address,
    phone: input.phone,
    email: input.email,
  };
  try {
    return await new Promise(resolve => {
      ProvidersModel.findOneAndUpdate({_id: input._id}, data, {new: true}, (err, provider) => {
        if (err) rejects(err);
        resolve(provider)
      })
    });
  } catch (error) {
    return error;
  }


};
