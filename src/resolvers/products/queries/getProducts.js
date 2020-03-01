import {ProvidersModel} from '../../../models';

/**
 * Devuelve todos los proveedores
 * @param _
 * @param {Object} request
 * @returns {Promise<*>}
 */
export const getProducts = async (_, request) => {
  return ProvidersModel.find(request);
};
