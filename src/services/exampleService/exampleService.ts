import { provide } from 'inversify-binding-decorators'
import { TYPE } from "@config/types"
import { IHandlePersonService } from "."
import path from 'path'

@provide(TYPE.HandlePersonService)
export class HandlePersonService implements IHandlePersonService {
  constructor() {}
  
  public getPersons = async () => {
    return [
      {
        name: 'Marlon',
        lastName: 'Conrado',
        age: 20
      }
    ]
  }
}