import buildMakeProduct from './product'
import productSchema from './product-schema'
let validator = require('../Validator')(productSchema.default)

let makeProduct = buildMakeProduct(validator)
export default makeProduct