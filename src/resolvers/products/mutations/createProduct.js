import {ProductsModel} from 'models';

/**
 * Crea un producto
 * @param _ - No se usa
 * @param {String} code
 * @param {String} name
 * @param {String} provider
 * @param {Number} amount
 * @param {Number} iva
 * @param {Number} re
 * @returns {String}
 */
export const createProduct = async (_, {code, name, provider, amount, iva, re}) => {
  try {
    await new ProductsModel({
      code,
      name,
      provider,
      amount,
      iva,
      re,
    }).save();

    const products = await ProductsModel.find({provider});
    return {
      message: 'El producto se ha creado correctamente.',
      products,
    }
  } catch (error) {
    return error;
  }
};
