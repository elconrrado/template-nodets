import Joi from '@hapi/joi'

export const ListPersonRequest: Joi.SchemaLike = Joi.object().keys({
  clientId: Joi.string().required(),
  ip: Joi.string().required(),
  payload: Joi.object().required().allow({})
}).required()