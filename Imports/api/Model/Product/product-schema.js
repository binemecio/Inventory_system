import joi from 'joi'

export default joi.object().keys({
  name: joi.string().required().error(() => 'must have name as string'),
  sizes: joi.string().required().error(() => 'must have sizes as string'),
  color: joi.string().required().error(() => 'must have color as string'),
  buyPrice: joi.number().required().error(() => 'must have buyPrice as number'),
  minPrice: joi.number().error(() => 'minPrice must be number'),
  deliveryPrice: joi.number().error(() => 'delivery must be number'),
})