import {ProvidersModel} from '../../../models';

/**
 * Devuelve todos los proveedores
 * @param _
 * @returns {Promise<*>}
 */
export const getProviders = async (_) => {
  return ProvidersModel.find({});
};
