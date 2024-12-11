import { useRoutes} from "react-router-dom";
import React, { useState } from 'react';
import RouterSite from './routers/RouterSite'
import LayoutSite from './layouts/site/index'
export default function App() {
    let element =useRoutes([
      {
        path:"/",
        element:<LayoutSite/>,
        children:RouterSite,
      }
    ]);
    return element
} 