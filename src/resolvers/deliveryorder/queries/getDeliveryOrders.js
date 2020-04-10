import {DeliveryOrderModel} from 'models';

/**
 * Devuelve todos los proveedores
 * @param _
 * @param {Object} request
 * @returns {Promise<*>}
 */
export const getDeliveryOrders = async (_, request = {}) => {
  return DeliveryOrderModel.aggregate([
      {$match: request},
      {
        $project: {
          _id: 1,
          date: 1,
          provider: 1,
          products: 1,
          size: {$size: '$products'},
          total: {$sum: '$products.total'}
        },
      },
    ],
  );
};
