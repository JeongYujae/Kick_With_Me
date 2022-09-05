import React from "react";
import { Route } from "react-router-dom";
import { useAppContext } from "../store";

const LoginRequiredRoute = ({component,...kwargs}) => {
    const {
        store:{isAuthenticated}
    }= useAppContext();

        console.log("isAuthenticated:",isAuthenticated);
        return <Route {...kwargs} element={component} />
}

export default LoginRequiredRoute
