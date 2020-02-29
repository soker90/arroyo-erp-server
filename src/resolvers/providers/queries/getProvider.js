import {ProvidersModel} from '../../../models';

/**
 * Devuelve los datos de un proveedor
 * @param _
 * @param {Object} request
 * @returns {Promise<*>}
 */
export const getProvider = async (_, {id, name}) => {
  const filter = {
    ...(id && {_id: id}),
    ...(name && {name}),
  };
  return await ProvidersModel.findOne(filter);
};
