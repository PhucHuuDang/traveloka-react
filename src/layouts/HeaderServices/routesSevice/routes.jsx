import config from "../config"

import Flights from "../pages/flights"
import Hotel from "../pages/hotel"
import Transfer from "../pages/Transfer"
import CarRent from "../pages/CarRent"
import Bus from "../pages/Bus"


const publicRoutes = [
    { path: config.routes.flight, component: Flights },
    { path: config.routes.fHotel, component: Hotel },
    { path: config.routes.transfer, component: Transfer },
    { path: config.routes.carRent, component: CarRent},
    { path: config.routes.bus, component: Bus }

]
const privateRoutes = [];

export { publicRoutes, privateRoutes }