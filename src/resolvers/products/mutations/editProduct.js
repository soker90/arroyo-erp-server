import {ProductsModel} from 'models';

/**
 * Edita un producto
 * @param _ - No se usa
 * @param {Object} input
 * @returns {String}
 */
export const editProduct = async (_,  { input }) => {
  const data = {
    name: input.name,
    code: input.code,
  };

  try {
    await new Promise(resolve => {
      ProductsModel.findOneAndUpdate({_id: input.id}, data, {new: true}, (err, product) => {
        if (err) rejects(err);
        resolve(product)
      })
    });

    const products = await ProductsModel.find({provider: input.provider});

    return {
      message: `El producto ${input.name} se ha modificado correctamente.`,
      products,
    }
  } catch (error) {
    return error;
  }
};
