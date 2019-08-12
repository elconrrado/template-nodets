import { TYPE } from '@config/types'
import { IHandlePersonService } from '@services/exampleService'
import * as express from 'express'
import { inject } from 'inversify'
import { 
  controller, 
  interfaces, 
  httpGet,
  request,
  response,
  next, 
  httpPost
} from 'inversify-express-utils'
import { ListPersonRequest } from './example.request'
import Joi from '@hapi/joi'
import { IResponse } from '~/models/response.model';
import { HTTP_ERRORS } from '~/models/serviceError.model';

@controller('')
export class HandlePersonController implements interfaces.Controller {
  constructor(
    @inject(TYPE.HandlePersonService) private handlePersonService: IHandlePersonService,
  ) {}

  @httpGet('/getPersons')
  private async getListPerson(
    @request() req: express.Request,
    @response() res: express.Response,
    @next() next: express.NextFunction
  ) {

    const valRequest = Joi.validate(req.body, ListPersonRequest)

    // Body no cumple con la estructura requerida
    if (valRequest.error) {
      const invalidRequest: IResponse = {
        data: {},
        errors: [HTTP_ERRORS.invalid_request],
        status: false
      } 
      return res.status(422).json(invalidRequest)
    }

    // LLama a servicios que trae la lista de personas
    let listPerson: any
    try {
      listPerson = await this.handlePersonService.getPersons()
    } catch (error) {
      const serverError: IResponse = {
        data: {},
        errors: [HTTP_ERRORS.internal_server_error],
        status: false
      }
      return res.status(500).json(serverError)
    }

    let dataResponse: IResponse;

    // Valida traiga data
    if (listPerson && listPerson.length > 0) {
      dataResponse = {
        data: listPerson,
        status: true
      }
      return res.status(200).json(dataResponse)
    } else {
      dataResponse = {
        data: {},
        status: false,
        errors: [HTTP_ERRORS.data_not_found]
      }
      return res.status(404).json(dataResponse)
    }
  }
}
