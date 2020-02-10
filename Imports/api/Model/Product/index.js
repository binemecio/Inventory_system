import buildMakeProduct from './product.js'
import productSchema from './product-schema.js'
import validator from '../validator/index.js'
let makeProduct = buildMakeProduct(validator(productSchema.default))
export default makeProduct