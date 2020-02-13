import {ProvidersModel} from '../../../models';

/**
 * Devuelve los datos de un proveedor
 * @param _
 * @param {Object} filter
 * @returns {Promise<*>}
 */
export const getProvider = async (_, {filter}) => {
  return ProvidersModel.find(filter);
};
