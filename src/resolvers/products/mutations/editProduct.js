import {ProductsModel} from 'models';

/**
 * Edita un producto
 * @param _ - No se usa
 * @param {String} input
 * @returns {String}
 */
export const editProduct = async (_, {input}) => {
  try {
    await new ProductsModel({
      code,
      name,
      provider,
    }).save();

    await new Promise(resolve => {
      ProductsModel.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, product) => {
        if (err) rejects(err);
        resolve(product)
      })
    });

    const products = await ProductsModel.find({provider: input?.provider});
    return {
      message: `El producto ${input?.name} se ha modificado correctamente.`,
      products,
    }
  } catch (error) {
    return error;
  }
};
