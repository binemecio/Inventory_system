import makeProduct from '../../model/product/index.js'
export default function makeCreateProduct ({ productDb }) {
  return async function createProduct (productInfo) {
    const product = makeProduct(productInfo)
    const commentSource = product.getSource()
    return productDb.insert({
      name: product.getName(),
      sizes: product.getName(),
      color: product.getName(),
      buyPrice: product.getName(),
      minPrice: product.getName(),
      deliveryPrice: product.getName()
    })
  }
}