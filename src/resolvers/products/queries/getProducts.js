import {ProvidersModel} from '../../../models';

/**
 * Devuelve todos los proveedores
 * @param _
 * @returns {Promise<*>}
 */
export const getProducts = async (_, filter) => {
  return ProvidersModel.find({filter});
};
