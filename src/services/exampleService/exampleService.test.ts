import 'reflect-metadata'

import { HandlePersonService } from "./exampleService"
import { IHandlePersonService } from "."

let handlePersonService: IHandlePersonService

describe('HandlePersonService', () => {
  test('intancia correcta', () => {
    handlePersonService = new HandlePersonService()
    expect(handlePersonService).toBeTruthy()
  })

  test('#getPersons devuelve lista de personas', async () => {

    let persons: any
    try {
      persons = await handlePersonService.getPersons()
      expect(persons).toEqual([
        {
          name: 'Marlon',
          lastName: 'Conrado',
          age: 20
        }
      ])
    } catch (error) {
      expect(error).toBeUndefined()
    } 
  })
})