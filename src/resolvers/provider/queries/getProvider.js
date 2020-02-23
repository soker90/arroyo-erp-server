import {ProvidersModel} from '../../../models';

/**
 * Devuelve los datos de un proveedor
 * @param _
 * @param {Object} request
 * @returns {Promise<*>}
 */
export const getProvider = async (_, request) => {
  console.log(request);
  return ProvidersModel.find(request);
};
