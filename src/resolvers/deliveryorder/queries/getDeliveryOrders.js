import {DeliveryOrderModel} from 'models';

/**
 * Devuelve todos los proveedores
 * @param _
 * @param {Object} request
 * @returns {Promise<*>}
 */
export const getDeliveryOrders = async (_, request = {}) => {
  return DeliveryOrderModel.find(request);
};
