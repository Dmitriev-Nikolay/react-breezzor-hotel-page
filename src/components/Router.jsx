import { Redirect, Route, Switch } from "react-router-dom";
import { hotelRoutes } from "../router";

const Router = () => {

    return (
        <Switch>
            {
                hotelRoutes.map(route =>
                    <Route
                        component={ route.component }
                        path= {route.path }
                        exact={ route.exact }
                        key={ route.path }
                    />
                )
            }
            <Redirect to='/hotel' />
        </Switch>
    );
};

export default Router;