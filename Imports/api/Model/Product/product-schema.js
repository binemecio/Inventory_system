import { object, string, number } from 'joi'

export default object().keys({
  name: string().required().error(() => 'must have name as string'),
  sizes: string().required().error(() => 'must have sizes as string'),
  color: string().required().error(() => 'must have color as string'),
  buyPrice: number().required().error(() => 'must have buyPrice as number'),
  minPrice: number().error(() => 'minPrice must be number'),
  deliveryPrice: number().error(() => 'delivery must be number'),
})