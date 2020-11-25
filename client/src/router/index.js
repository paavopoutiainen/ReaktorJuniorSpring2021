import React from 'react'
import { Switch, Route } from 'react-router-dom'
import JacketsPage from '../pages/JacketsPage'
import ShirtsPage from '../pages/ShirtsPage'
import AccessoriesPage from '../pages/AccessoriesPage'
import LandingPage from '../pages/LandingPage'

const Router = () => {

    return (
        <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route exact path="/jackets">
                <JacketsPage  />
            </Route>
            <Route exact path="/shirts">
                <ShirtsPage  />
            </Route>
            <Route exact path="/accessories">
                <AccessoriesPage  />
            </Route>
        </Switch>
    )
}

export default Router