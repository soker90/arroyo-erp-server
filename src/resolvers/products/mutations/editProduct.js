import {ProductsModel} from 'models';

/**
 * Edita un producto
 * @param _ - No se usa
 * @param {Object} input
 * @returns {String}
 */
export const editProduct = async (_, {input}) => {
  const data = {
    name: input.name,
    code: input.code,
    amount: input.amount,
    iva: input.iva,
    re: input.re,
  };

  try {
    const product = await new Promise(resolve => {
      ProductsModel.findOneAndUpdate({_id: input._id}, {$set: data}, {new: true}, (err, product) => {
        if (err) rejects(err);
        resolve(product)
      })
    });

    const products = await ProductsModel.find({provider: product.provider});

    return {
      message: `El producto ${input.name} se ha modificado correctamente.`,
      products,
    }
  } catch (error) {
    return error;
  }
};
