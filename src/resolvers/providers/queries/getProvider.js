import {ProvidersModel} from '../../../models';
import {ObjectId} from 'mongoose';

/**
 * Devuelve los datos de un proveedor
 * @param _
 * @param {Object} request
 * @returns {Promise<*>}
 */
export const getProvider = async (_, request) => {
  const params = {
  ...(request.id && {_id: ProvidersModel.ObjectId(request.id)}),
    ...(request.name && {name: request.name})
  };
  const result = ProvidersModel.find(params);
  console.log(await result);
  return result;
};
