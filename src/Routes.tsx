import React from 'react'
import {BrowserRouter , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layouts from './Layouts'



const Routes = () => {
    return(
        <BrowserRouter>
             <Layouts>
                 <Route path="/" exact component={Home} />
            </Layouts>   
        </BrowserRouter>
    )
}

export default Routes