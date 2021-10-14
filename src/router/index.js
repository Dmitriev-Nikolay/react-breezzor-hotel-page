import Home from "../pages/Home/Home";
import BreezzorPass from "../pages/BreezzorPass/BreezzorPass";
import Services from "../pages/Services/Services";
import Restaurant from "../pages/Restaurant/Restaurant";
import Events from "../pages/Events/Events";

export const hotelRoutes = [
    { path: '/hotel', component: Home, exact: true },
    { path: '/pass', component: BreezzorPass, exact: true },
    { path: '/services', component: Services, exact: true },
    { path: '/restaurant', component: Restaurant, exact: true },
    { path: '/events', component: Events, exact: true },
];