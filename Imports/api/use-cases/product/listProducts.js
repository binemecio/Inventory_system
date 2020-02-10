
export default function makeListComments ({ productDb }) {
  return async function listProducts (productInfo) {
    const productList = productDb.findAll()
    return productList
    // return productList.map(item => makeProduct(item))
  }
}