import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Client from './view/Cliente/index'
import Home from './view/Home/index'
import Products from './view/Product/index'

export default function Routes() {
return(

    <BrowserRouter>
<Switch>

<Route path = '/home' exact component={Home}/>
<Route path = '/client' exact component={Client}/>
<Route path = '/product' exact component={Products}/>

</Switch>    
    </BrowserRouter>

)

}