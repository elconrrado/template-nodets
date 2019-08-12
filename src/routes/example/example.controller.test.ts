
import { createRequest, createResponse } from 'node-mocks-http'
import { interfaces } from "inversify-express-utils";
import { HandlePersonController } from "./example.controller";
import { IHandlePersonService } from "~/services/exampleService";
import { HandlePersonService } from "~/services/exampleService/exampleService";


const handlePersonService: HandlePersonService = new HandlePersonService()
let handlePersonController: interfaces.Controller

describe('HandlePersonController', () => {

  test('intancia correcta', () => {
    handlePersonController = new HandlePersonController(handlePersonService)
    expect(handlePersonController).toBeDefined()
  })

  test('#getListPerson debe traer lista de personas', async () => {

    const req = createRequest({
      method: 'POST',
      body: {},
      url: ''
    })
    await handlePersonService.getPersons()
  })
})