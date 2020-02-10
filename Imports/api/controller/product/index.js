import {
  addProduct, productList
} from '../../use-cases/product/index.js'
import makeCreateProduct from './createProduct.js'
import makeGetProductList from './getProductList.js'

const createProduct = makeCreateProduct({ addProduct })
const getProductList = makeGetProductList( productList )

const productController = Object.freeze({
  createProduct,
  getProductList
})

export default productController
export { createProduct, getProductList }