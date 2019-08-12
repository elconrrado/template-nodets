import { container, buildProviderModule } from './inversify.config'

// Controllers 
import '../routes/handlePerson/handlePerson.controller'

// Services
import '../services/handlePersonService/handlePersonService'

container.load(buildProviderModule())