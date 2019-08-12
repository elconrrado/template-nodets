//
// Copyright (C) 2019 - Banco Davivienda S.A. y sus filiales.
//

import { Container, inject } from 'inversify'
import { buildProviderModule, provide } from 'inversify-binding-decorators'

const container = new Container()

export { buildProviderModule, container, provide, inject }
