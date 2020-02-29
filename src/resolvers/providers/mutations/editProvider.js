import {ProviderModel} from 'models';

/**
 * Crea un usuario
 * @param _ - No se usa
 * @param {Object} input
 * @returns {String}
 */
export const editProvider = async (_, {input}) => {
  return new Promise(resolve => {
    ProviderModel.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, provider) => {
      if (err) rejects(err);
      resolve(provider)
    })
  });
};
