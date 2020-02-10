import makeCreateProduct from './createProduct.js'
import makeListProduct from './listProducts.js'
import productDb from '../../data-access/index.js'

const addProduct = makeCreateProduct({ productDb })
const productList = makeListProduct({ productDb })

const productService = Object.freeze({
  addProduct,
  productList
})

export default productService
export { addProduct, productList }