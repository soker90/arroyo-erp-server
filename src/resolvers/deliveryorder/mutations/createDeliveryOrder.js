import {DeliveryOrderModel} from 'models';

/**
 * Crea un albarán
 * @param _ - No se usa
 * @param {String} date
 * @param {String} provider
 * @param {Array} products
 * @returns {String}
 */
export const createDeliveryOrder = async (_, {date, provider, products}) => {
  console.log('eee')
  try {
    await new DeliveryOrderModel({
      date,
      provider,
      products,
    }).save();

    return 'El albarán se ha creado correctamente.';
  } catch (error) {
    return error;
  }
};
