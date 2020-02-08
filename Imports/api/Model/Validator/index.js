import { validate } from 'joi'

export default function(schema)
{
  return function(payload){
    let {error} = validate(payload, schema, {abortEarly: false})
    if (error) {
      let message = error.details.map(el => el.message).join('\n')
      return {
        error: message
      }
    }
    return true
  }
}
