import {ProvidersModel} from '../../../models';

/**
 * Devuelve los datos de un proveedor
 * @param _
 * @param {Object} request
 * @returns {Promise<*>}
 */
export const getProvider = async (_, request) => {
  const data = {_id: request.id};
  return ProvidersModel.findOne(data);
};
